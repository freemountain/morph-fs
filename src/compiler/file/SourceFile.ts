﻿import * as ts from "typescript";
import * as errors from "./../../errors";
import {GlobalContainer} from "./../../GlobalContainer";
import {removeChildrenWithFormatting, FormattingKind} from "./../../manipulation";
import {Constructor} from "./../../Constructor";
import {ImportDeclarationStructure, ExportDeclarationStructure, SourceFileStructure} from "./../../structures";
import {ArrayUtils, FileUtils, newLineKindToTs} from "./../../utils";
import {callBaseFill} from "./../callBaseFill";
import {TextInsertableNode} from "./../base";
import {Node, Symbol} from "./../common";
import {StatementedNode} from "./../statement";
import {Diagnostic, EmitResult} from "./../tools";
import {ImportDeclaration} from "./ImportDeclaration";
import {ExportDeclaration} from "./ExportDeclaration";

// todo: not sure why I need to explicitly type this in order to get VS to not complain... (TS 2.4.1)
export const SourceFileBase: Constructor<StatementedNode & TextInsertableNode> & typeof Node = TextInsertableNode(StatementedNode(Node));
export class SourceFile extends SourceFileBase<ts.SourceFile> {
    /** @internal */
    private _isSaved = false;

    /**
     * Initializes a new instance.
     * @internal
     * @param global - Global container.
     * @param node - Underlying node.
     */
    constructor(
        global: GlobalContainer,
        node: ts.SourceFile
    ) {
        // start hack :(
        super(global, node, undefined as any);
        this.sourceFile = this;
        // end hack
    }

    /**
     * Fills the node from a structure.
     * @param structure - Structure to fill.
     */
    fill(structure: Partial<SourceFileStructure>) {
        callBaseFill(SourceFileBase.prototype, this, structure);

        if (structure.imports != null)
            this.addImports(structure.imports);
        if (structure.exports != null)
            this.addExports(structure.exports);

        return this;
    }

    /**
     * @internal
     */
    replaceCompilerNode(compilerNode: ts.SourceFile) {
        super.replaceCompilerNode(compilerNode);
        this.global.resetProgram(); // make sure the program has the latest source file
        this._isSaved = true;
    }

    /**
     * Gets the file path.
     */
    getFilePath() {
        return this.compilerNode.fileName;
    }

    /**
     * Copy this source file to a new file.
     * @param filePath - A new file path. Can be relative to the original file or an absolute path.
     */
    copy(filePath: string): SourceFile {
        const absoluteFilePath = FileUtils.getAbsoluteOrRelativePathFromPath(filePath, FileUtils.getDirName(this.getFilePath()));
        return this.global.compilerFactory.addSourceFileFromText(absoluteFilePath, this.getFullText());
    }

    /**
     * Asynchronously saves this file with any changes.
     */
    save() {
        return this.global.fileSystem.writeFile(this.getFilePath(), this.getFullText()).then(() => {
            this._isSaved = true;
        });
    }

    /**
     * Synchronously saves this file with any changes.
     */
    saveSync() {
        this.global.fileSystem.writeFileSync(this.getFilePath(), this.getFullText());
        this._isSaved = true;
    }

    /**
     * Gets any referenced files.
     */
    getReferencedFiles() {
        // todo: add tests
        const dirName = FileUtils.getDirName(this.getFilePath());
        return (this.compilerNode.referencedFiles || [])
            .map(f => this.global.compilerFactory.getSourceFileFromFilePath(FileUtils.pathJoin(dirName, f.fileName)))
            .filter(f => f != null) as SourceFile[];
    }

    /**
     * Gets the source files for any type reference directives.
     */
    getTypeReferenceDirectives() {
        // todo: add tests
        const dirName = FileUtils.getDirName(this.getFilePath());
        return (this.compilerNode.typeReferenceDirectives || [])
            .map(f => this.global.compilerFactory.getSourceFileFromFilePath(FileUtils.pathJoin(dirName, f.fileName)))
            .filter(f => f != null) as SourceFile[];
    }

    /**
     * Gets the source file language variant.
     */
    getLanguageVariant() {
        return this.compilerNode.languageVariant;
    }

    /**
     * Gets if this is a declaration file.
     */
    isDeclarationFile() {
        return this.compilerNode.isDeclarationFile;
    }

    /**
     * Gets if this source file has been saved or if the latest changes have been saved.
     */
    isSaved() {
        return this._isSaved;
    }

    /**
     * Sets if this source file has been saved.
     * @internal
     */
    setIsSaved(value: boolean) {
        this._isSaved = value;
    }

    /**
     * Add an import.
     * @param structure - Structure that represents the import.
     */
    addImport(structure: ImportDeclarationStructure) {
        return this.addImports([structure])[0];
    }

    /**
     * Add imports.
     * @param structures - Structures that represent the imports.
     */
    addImports(structures: ImportDeclarationStructure[]) {
        const imports = this.getImports();
        const insertIndex = imports.length === 0 ? 0 : imports[imports.length - 1].getChildIndex() + 1;
        return this.insertImports(insertIndex, structures);
    }

    /**
     * Insert an import.
     * @param index - Index to insert at.
     * @param structure - Structure that represents the import.
     */
    insertImport(index: number, structure: ImportDeclarationStructure) {
        return this.insertImports(index, [structure])[0];
    }

    /**
     * Insert imports into a file.
     * @param index - Index to insert at.
     * @param structures - Structures that represent the imports to insert.
     */
    insertImports(index: number, structures: ImportDeclarationStructure[]) {
        const newLineChar = this.global.manipulationSettings.getNewLineKind();
        const indentationText = this.getChildIndentationText();
        const texts = structures.map(structure => {
            const hasNamedImport = structure.namedImports != null && structure.namedImports.length > 0;
            let code = `${indentationText}import`;
            // validation
            if (hasNamedImport && structure.namespaceImport != null)
                throw new errors.InvalidOperationError("An import declaration cannot have both a namespace import and a named import.");
            // default import
            if (structure.defaultImport != null) {
                code += ` ${structure.defaultImport}`;
                if (hasNamedImport || structure.namespaceImport != null)
                    code += ",";
            }
            // namespace import
            if (structure.namespaceImport != null)
                code += ` * as ${structure.namespaceImport}`;
            // named imports
            if (structure.namedImports != null && structure.namedImports.length > 0) {
                const namedImportsCode = structure.namedImports.map(n => {
                    let namedImportCode = n.name;
                    if (n.alias != null)
                        namedImportCode += ` as ${n.alias}`;
                    return namedImportCode;
                }).join(", ");
                code += ` {${namedImportsCode}}`;
            }
            // from keyword
            if (structure.defaultImport != null || hasNamedImport || structure.namespaceImport != null)
                code += " from";
            code += ` "${structure.moduleSpecifier}";`;
            return code;
        });

        return this._insertMainChildren<ImportDeclaration>(index, texts, structures, ts.SyntaxKind.ImportDeclaration, undefined, {
            previousBlanklineWhen: previousMember => !(previousMember instanceof ImportDeclaration),
            nextBlanklineWhen: nextMember => !(nextMember instanceof ImportDeclaration),
            separatorNewlineWhen: () => false
        });
    }

    /**
     * Gets the first import declaration that matches a condition, or undefined if it doesn't exist.
     * @param condition - Condition to get the import by.
     */
    getImport(condition: (importDeclaration: ImportDeclaration) => boolean): ImportDeclaration | undefined {
        return this.getImports().find(condition);
    }

    /**
     * Get the file's import declarations.
     */
    getImports(): ImportDeclaration[] {
        return this.getChildSyntaxListOrThrow().getChildrenOfKind<ImportDeclaration>(ts.SyntaxKind.ImportDeclaration);
    }

    /**
     * Add an export.
     * @param structure - Structure that represents the export.
     */
    addExport(structure: ExportDeclarationStructure) {
        return this.addExports([structure])[0];
    }

    /**
     * Add exports.
     * @param structures - Structures that represent the exports.
     */
    addExports(structures: ExportDeclarationStructure[]) {
        // always insert at end of file because of export {Identifier}; statements
        return this.insertExports(this.getChildSyntaxListOrThrow().getChildCount(), structures);
    }

    /**
     * Insert an export.
     * @param index - Index to insert at.
     * @param structure - Structure that represents the export.
     */
    insertExport(index: number, structure: ExportDeclarationStructure) {
        return this.insertExports(index, [structure])[0];
    }

    /**
     * Insert exports into a file.
     * @param index - Index to insert at.
     * @param structures - Structures that represent the exports to insert.
     */
    insertExports(index: number, structures: ExportDeclarationStructure[]) {
        const newLineChar = this.global.manipulationSettings.getNewLineKind();
        const stringChar = this.global.manipulationSettings.getStringChar();
        const indentationText = this.getChildIndentationText();
        const texts = structures.map(structure => {
            const hasModuleSpecifier = structure.moduleSpecifier != null && structure.moduleSpecifier.length > 0;
            let code = `${indentationText}export`;
            if (structure.namedExports != null && structure.namedExports.length > 0) {
                const namedExportsCode = structure.namedExports.map(n => {
                    let namedExportCode = n.name;
                    if (n.alias != null)
                        namedExportCode += ` as ${n.alias}`;
                    return namedExportCode;
                }).join(", ");
                code += ` {${namedExportsCode}}`;
            }
            else if (!hasModuleSpecifier)
                code += " {}";
            else
                code += " *";

            if (hasModuleSpecifier)
                code += ` from ${stringChar}${structure.moduleSpecifier}${stringChar}`;

            code += `;`;
            return code;
        });

        return this._insertMainChildren<ImportDeclaration>(index, texts, structures, ts.SyntaxKind.ExportDeclaration, undefined, {
            previousBlanklineWhen: previousMember => !(previousMember instanceof ExportDeclaration),
            nextBlanklineWhen: nextMember => !(nextMember instanceof ExportDeclaration),
            separatorNewlineWhen: () => false
        });
    }

    /**
     * Gets the first export declaration that matches a condition, or undefined if it doesn't exist.
     * @param condition - Condition to get the export by.
     */
    getExport(condition: (exportDeclaration: ExportDeclaration) => boolean): ExportDeclaration | undefined {
        return this.getExports().find(condition);
    }

    /**
     * Get the file's export declarations.
     */
    getExports(): ExportDeclaration[] {
        return this.getChildSyntaxListOrThrow().getChildrenOfKind<ExportDeclaration>(ts.SyntaxKind.ExportDeclaration);
    }

    /**
     * Gets the default export symbol of the file.
     */
    getDefaultExportSymbol(): Symbol | undefined {
        const sourceFileSymbol = this.getSymbol();

        // will be undefined when the source file doesn't have an export
        if (sourceFileSymbol == null)
            return undefined;

        return sourceFileSymbol.getExportByName("default");
    }

    /**
     * Gets the compiler diagnostics.
     */
    getDiagnostics(): Diagnostic[] {
        // todo: implement cancellation token
        const compilerDiagnostics = ts.getPreEmitDiagnostics(this.global.program.compilerObject, this.compilerNode);
        return compilerDiagnostics.map(d => this.global.compilerFactory.getDiagnostic(d));
    }

    /**
     * Removes any "export default";
     */
    removeDefaultExport(defaultExportSymbol?: Symbol | undefined): this {
        defaultExportSymbol = defaultExportSymbol || this.getDefaultExportSymbol();

        if (defaultExportSymbol == null)
            return this;

        const declaration = defaultExportSymbol.getDeclarations()[0];
        if (declaration.compilerNode.kind === ts.SyntaxKind.ExportAssignment)
            removeChildrenWithFormatting({ children: [declaration], getSiblingFormatting: () => FormattingKind.Newline });
        else if (declaration.isModifierableNode()) {
            declaration.toggleModifier("default", false);
            declaration.toggleModifier("export", false);
        }

        return this;
    }

    /**
     * Emits the source file.
     */
    emit(options?: { emitOnlyDtsFiles?: boolean; }): EmitResult {
        return this.global.program.emit({ targetSourceFile: this, ...options });
    }

    /**
     * Formats the source file text using the internal typescript printer.
     *
     * WARNING: This will dispose any previously navigated descendant nodes.
     */
    formatText(opts: { removeComments?: boolean } = {}) {
        const printer = ts.createPrinter({
            newLine: newLineKindToTs(this.global.manipulationSettings.getNewLineKind()),
            removeComments: opts.removeComments || false
        });
        const newText = printer.printFile(this.compilerNode);
        const replacementSourceFile = this.global.compilerFactory.createTempSourceFileFromText(newText, this.getFilePath());
        this.getChildren().forEach(d => d.dispose()); // this will dispose all the descendants
        this.replaceCompilerNode(replacementSourceFile.compilerNode);
    }
}
