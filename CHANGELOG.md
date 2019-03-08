# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.0.14](https://github.com/freemountain/morph-fs/compare/0.0.13...0.0.14) (2019-03-08)



## [0.0.13](https://github.com/freemountain/morph-fs/compare/0.0.12...0.0.13) (2019-03-08)



## [0.0.12](https://github.com/freemountain/morph-fs/compare/0.0.11...0.0.12) (2019-03-08)



## [0.0.11](https://github.com/freemountain/morph-fs/compare/0.0.10...0.0.11) (2019-03-08)



## [0.0.10](https://github.com/freemountain/morph-fs/compare/0.0.9...0.0.10) (2019-03-08)



## [0.0.9](https://github.com/freemountain/morph-fs/compare/0.0.8...0.0.9) (2019-03-08)



## [0.0.8](https://github.com/freemountain/morph-fs/compare/0.0.7...0.0.8) (2019-03-08)



## [0.0.7](https://github.com/freemountain/morph-fs/compare/0.0.6...0.0.7) (2019-03-08)



## [0.0.6](https://github.com/freemountain/morph-fs/compare/0.0.5...0.0.6) (2019-03-08)



## [0.0.5](https://github.com/freemountain/morph-fs/compare/0.0.4...0.0.5) (2019-03-08)



## [0.0.4](https://github.com/freemountain/morph-fs/compare/0.0.3...0.0.4) (2019-03-08)



## [0.0.3](https://github.com/freemountain/morph-fs/compare/0.0.2...0.0.3) (2019-03-08)



## [0.0.2](https://github.com/freemountain/morph-fs/compare/0.0.1...0.0.2) (2019-03-08)



## 0.0.1 (2019-03-07)


### Bug Fixes

* [#104](https://github.com/freemountain/morph-fs/issues/104) - Fix documentation with compile errors. ([9d16ab4](https://github.com/freemountain/morph-fs/commit/9d16ab4))
* [#125](https://github.com/freemountain/morph-fs/issues/125) - Inserting a namespace or class into an ambient module/namespace should not write as non-ambient. ([a3c6291](https://github.com/freemountain/morph-fs/commit/a3c6291))
* [#137](https://github.com/freemountain/morph-fs/issues/137) - Improve error message when manipulation throws error. ([34620f0](https://github.com/freemountain/morph-fs/commit/34620f0))
* [#149](https://github.com/freemountain/morph-fs/issues/149) - "SourceFile.formatText() should respect indentation settings" ([b0b9e53](https://github.com/freemountain/morph-fs/commit/b0b9e53))
* [#150](https://github.com/freemountain/morph-fs/issues/150) - Fix SourceFile.addImport not using the specified string char. ([e704330](https://github.com/freemountain/morph-fs/commit/e704330))
* [#192](https://github.com/freemountain/morph-fs/issues/192) - Fix forget block crashes when removing node. ([3f195ea](https://github.com/freemountain/morph-fs/commit/3f195ea))
* [#195](https://github.com/freemountain/morph-fs/issues/195) - Fixes emitting directory crashes when directory does not exist. ([57c3381](https://github.com/freemountain/morph-fs/commit/57c3381))
* [#196](https://github.com/freemountain/morph-fs/issues/196) - Fixes directory.copy() crashing when directory already exists. ([def2992](https://github.com/freemountain/morph-fs/commit/def2992))
* [#203](https://github.com/freemountain/morph-fs/issues/203) - Source file will now be marked as "saved" when updating from file system. ([fa0dd2c](https://github.com/freemountain/morph-fs/commit/fa0dd2c))
* [#203](https://github.com/freemountain/morph-fs/issues/203) - Source file will now be marked as "saved" when updating from file system. ([65f22ac](https://github.com/freemountain/morph-fs/commit/65f22ac))
* [#218](https://github.com/freemountain/morph-fs/issues/218) - Throw an error when a node is constructed outside the library. ([74fa8c1](https://github.com/freemountain/morph-fs/commit/74fa8c1))
* [#219](https://github.com/freemountain/morph-fs/issues/219) - Removing the last statement in a default or case clause will cause a double newline. ([d46cbd0](https://github.com/freemountain/morph-fs/commit/d46cbd0))
* [#239](https://github.com/freemountain/morph-fs/issues/239) - Fix JSDoc.getInnerText() stripping leading spaces. ([b9c56de](https://github.com/freemountain/morph-fs/commit/b9c56de))
* [#244](https://github.com/freemountain/morph-fs/issues/244) - Fixes setOrder() bug where verify fails incorrectly. ([c7bec28](https://github.com/freemountain/morph-fs/commit/c7bec28))
* [#261](https://github.com/freemountain/morph-fs/issues/261) - sourceFile.getRelativePathToSourceFileAsModuleSpecifier(...) should not strip "index" file name when module resolution is classic. ([5ce71ac](https://github.com/freemountain/morph-fs/commit/5ce71ac))
* [#262](https://github.com/freemountain/morph-fs/issues/262) - Write public keyword when specified. ([6258c0e](https://github.com/freemountain/morph-fs/commit/6258c0e))
* [#265](https://github.com/freemountain/morph-fs/issues/265) - Fix error thrown getting members in class containing semicolon terminated constructor & method declarations. ([dfb979f](https://github.com/freemountain/morph-fs/commit/dfb979f))
* [#269](https://github.com/freemountain/morph-fs/issues/269) - Support "extends" in tsconfig.json. ([4964bb7](https://github.com/freemountain/morph-fs/commit/4964bb7))
* [#270](https://github.com/freemountain/morph-fs/issues/270) - Fix relative path file globs not working when using .getSourceFiles(...) ([fa19352](https://github.com/freemountain/morph-fs/commit/fa19352))
* [#271](https://github.com/freemountain/morph-fs/issues/271) - Fix SourceFile.move not deleting previous file on file system. ([a4dfda9](https://github.com/freemountain/morph-fs/commit/a4dfda9))
* [#308](https://github.com/freemountain/morph-fs/issues/308) - Should not insert before the BOM. ([07a2a51](https://github.com/freemountain/morph-fs/commit/07a2a51))
* [#312](https://github.com/freemountain/morph-fs/issues/312) - StatementedNode uses inconsistent source for child count. ([67a22b9](https://github.com/freemountain/morph-fs/commit/67a22b9))
* [#314](https://github.com/freemountain/morph-fs/issues/314) - Fix moved source file not being marked as dirty in reference cache after move. ([91b1fbd](https://github.com/freemountain/morph-fs/commit/91b1fbd))
* [#316](https://github.com/freemountain/morph-fs/issues/316) - Getting references between source files was broken when the importHelpers compiler option was true. ([701e936](https://github.com/freemountain/morph-fs/commit/701e936))
* [#335](https://github.com/freemountain/morph-fs/issues/335) - addStatements would throw if the containing block was only indented a portion of an indentation level. ([c93104c](https://github.com/freemountain/morph-fs/commit/c93104c))
* [#336](https://github.com/freemountain/morph-fs/issues/336) - Calling .remove() incorrectly removes next sibling's leading comments. ([aab1c1b](https://github.com/freemountain/morph-fs/commit/aab1c1b))
* [#345](https://github.com/freemountain/morph-fs/issues/345) - ArrowFunction should be a FunctionLikeDeclaration. ([b3ea86f](https://github.com/freemountain/morph-fs/commit/b3ea86f))
* [#348](https://github.com/freemountain/morph-fs/issues/348) - project.getSourceFiles() would sometimes return multiple instances of the same source file. ([8888967](https://github.com/freemountain/morph-fs/commit/8888967))
* [#352](https://github.com/freemountain/morph-fs/issues/352) - Fixed reading relative files from tsconfig.json with multiple rootDirs ([c2e948f](https://github.com/freemountain/morph-fs/commit/c2e948f))
* [#354](https://github.com/freemountain/morph-fs/issues/354) - Support using ts-simple-ast in the browser without mocking "fs" or "fs-extra" ([795fe55](https://github.com/freemountain/morph-fs/commit/795fe55))
* [#356](https://github.com/freemountain/morph-fs/issues/356) - Setting method as abstract in structure should not write method body. ([8f70df2](https://github.com/freemountain/morph-fs/commit/8f70df2))
* [#359](https://github.com/freemountain/morph-fs/issues/359) - Fix problems when manipulating within forEachChild or forEachDescendant. ([bc124ed](https://github.com/freemountain/morph-fs/commit/bc124ed))
* [#362](https://github.com/freemountain/morph-fs/issues/362) - SyntaxList.insertChildText(...) would throw when not inserting to the child syntax list. ([738fb47](https://github.com/freemountain/morph-fs/commit/738fb47))
* [#365](https://github.com/freemountain/morph-fs/issues/365) - Replacing text of an identifier deep in a property access expression would throw. ([4a7b1e2](https://github.com/freemountain/morph-fs/commit/4a7b1e2))
* [#366](https://github.com/freemountain/morph-fs/issues/366) - Should be able to add a question token to a node without a type. ([c43c1e7](https://github.com/freemountain/morph-fs/commit/c43c1e7))
* [#373](https://github.com/freemountain/morph-fs/issues/373) - Fix setType when only a question or exclamation token exists. ([15d6a24](https://github.com/freemountain/morph-fs/commit/15d6a24))
* [#374](https://github.com/freemountain/morph-fs/issues/374) - Surround parameter in parenthesis when there is none and setting its initializer, type, or adding a question token. ([847dab6](https://github.com/freemountain/morph-fs/commit/847dab6))
* [#394](https://github.com/freemountain/morph-fs/issues/394) - Handle inconsistent file path casings on case insensitive file systems. ([f7f6a3c](https://github.com/freemountain/morph-fs/commit/f7f6a3c))
* [#397](https://github.com/freemountain/morph-fs/issues/397) - Fix type.getProperties() sometimes throwing an error. ([8078772](https://github.com/freemountain/morph-fs/commit/8078772))
* [#405](https://github.com/freemountain/morph-fs/issues/405) - "Error when renaming a file when [@types](https://github.com/types) exists" ([a63400c](https://github.com/freemountain/morph-fs/commit/a63400c))
* [#410](https://github.com/freemountain/morph-fs/issues/410) - `sourceFile.getExportedDeclarations()` throws exception if file is empty ([8d563ac](https://github.com/freemountain/morph-fs/commit/8d563ac))
* [#413](https://github.com/freemountain/morph-fs/issues/413) - .addExistingSourceFiles(...) will occasionally error for certain file globs. ([15a6027](https://github.com/freemountain/morph-fs/commit/15a6027))
* [#414](https://github.com/freemountain/morph-fs/issues/414) - insertText() not working for namespace declaration ([ee1fa55](https://github.com/freemountain/morph-fs/commit/ee1fa55))
* [#420](https://github.com/freemountain/morph-fs/issues/420) - Setting enum, namespace, or type alias as a default export should be done with a separate export assignment. ([e81412c](https://github.com/freemountain/morph-fs/commit/e81412c))
* [#421](https://github.com/freemountain/morph-fs/issues/421) - "Adding a child to an empty namespace with dot notation in the name causes brace to be lost" ([0b73d4f](https://github.com/freemountain/morph-fs/commit/0b73d4f))
* [#424](https://github.com/freemountain/morph-fs/issues/424) - UTF-8 bom causes incorrect indentation to be inserted. ([c4a63a1](https://github.com/freemountain/morph-fs/commit/c4a63a1))
* [#437](https://github.com/freemountain/morph-fs/issues/437) - Fix `findReferencesAsNodes` having an undefined entry when the reference is within a string literal. ([06943a9](https://github.com/freemountain/morph-fs/commit/06943a9))
* [#460](https://github.com/freemountain/morph-fs/issues/460) - Calling setHasDeclareKeyword on interfaces and type aliases should modify them. ([7d7c8e2](https://github.com/freemountain/morph-fs/commit/7d7c8e2))
* [#468](https://github.com/freemountain/morph-fs/issues/468) - Removing class members should not assume it's in a class. ([2c4db99](https://github.com/freemountain/morph-fs/commit/2c4db99))
* [#482](https://github.com/freemountain/morph-fs/issues/482) - Import and export declaration should not include quotes in module specifier in structure ([92c7f46](https://github.com/freemountain/morph-fs/commit/92c7f46))
* [#483](https://github.com/freemountain/morph-fs/issues/483) - `getDerivedClasses()` fails when there exists an interface that extends the class ([2bbcec5](https://github.com/freemountain/morph-fs/commit/2bbcec5))
* [#484](https://github.com/freemountain/morph-fs/issues/484) - organizeImports() would sometimes throw. ([447bcfc](https://github.com/freemountain/morph-fs/commit/447bcfc))
* [#493](https://github.com/freemountain/morph-fs/issues/493) - Renaming sometimes renamed at wrong text location. ([1f4316e](https://github.com/freemountain/morph-fs/commit/1f4316e))
* [#507](https://github.com/freemountain/morph-fs/issues/507) - CompilerNodeToWrappedType sometimes resolved to any. ([91e0e1e](https://github.com/freemountain/morph-fs/commit/91e0e1e))
* [#548](https://github.com/freemountain/morph-fs/issues/548) - Getting JS doc descendants by kind should find nodes. ([2fd7cac](https://github.com/freemountain/morph-fs/commit/2fd7cac))
* [#557](https://github.com/freemountain/morph-fs/issues/557) - ExportableNode#isNamedExport() should work when named export is done via export statement. ([7e18296](https://github.com/freemountain/morph-fs/commit/7e18296))
* [#560](https://github.com/freemountain/morph-fs/issues/560) - Type#isEnum() and isEnumLiteral() would not always return correct values. ([98c82bc](https://github.com/freemountain/morph-fs/commit/98c82bc))
* `printNode` should get the source file from the passed in node if it exists. ([3a77dbc](https://github.com/freemountain/morph-fs/commit/3a77dbc))
* Abstract methods were incorrectly returning true for .isOverload() ([ef29ee1](https://github.com/freemountain/morph-fs/commit/ef29ee1))
* Accidentally released with no jsdocs. ([cf58690](https://github.com/freemountain/morph-fs/commit/cf58690))
* BindingNamedNode should support BindingName. ([611ea99](https://github.com/freemountain/morph-fs/commit/611ea99))
* Blank line would be inserted when calling an addXs method and providing an empty array in some scenarios. ([dfbf940](https://github.com/freemountain/morph-fs/commit/dfbf940))
* BooleanLiteral#setLiteralValue(value: boolean) should never return undefined. ([d1ee709](https://github.com/freemountain/morph-fs/commit/d1ee709))
* Change formatting settings insertSpaceAfterSemicolonInForStatements to be true by default. ([b74dfd9](https://github.com/freemountain/morph-fs/commit/b74dfd9))
* Changing from namespace to module keyword and vice versa will now change the node kind. ([38dc73b](https://github.com/freemountain/morph-fs/commit/38dc73b))
* ClassDeclaration.getBaseClass should return the base class when using mixins. ([b455c60](https://github.com/freemountain/morph-fs/commit/b455c60))
* createDirectory should throw if the directory exists. ([93a9da2](https://github.com/freemountain/morph-fs/commit/93a9da2))
* Directory.copy should not update module specifiers pointing to other files in the directory being copied. ([09244f9](https://github.com/freemountain/morph-fs/commit/09244f9))
* Directory.getSourceFile should only return source files currently existing within the cache. ([8db2d84](https://github.com/freemountain/morph-fs/commit/8db2d84))
* DocumentRegistry - Ensure any file paths sent from the compiler api are normalized. ([1c06559](https://github.com/freemountain/morph-fs/commit/1c06559))
* Exceptions occurring when synchronously calling forgetNodesCreatedInBlock weren't being thrown. ([82798c1](https://github.com/freemountain/morph-fs/commit/82798c1))
* Export Project as named export to match declaration file. ([f529801](https://github.com/freemountain/morph-fs/commit/f529801))
* ExportableNode.isExported() takes into account all possible ways for a node to be exported from a file. ([ad07c33](https://github.com/freemountain/morph-fs/commit/ad07c33))
* ExportableNode.setIsExported should not remove a default export on a different line. ([fe0bcc0](https://github.com/freemountain/morph-fs/commit/fe0bcc0))
* ExportAssignmentStructure.isEqualsExport should be isExportEquals. Deprecated until next major. ([1189352](https://github.com/freemountain/morph-fs/commit/1189352))
* ExportDeclaration.addNamedExport method overload was a duplicate of the other one. ([3715875](https://github.com/freemountain/morph-fs/commit/3715875))
* Fix `sourceFile.getExportedDeclarations()` returning import identifiers in some scenarios ([295ea4a](https://github.com/freemountain/morph-fs/commit/295ea4a))
* Fix crashes when dealing with statemented nodes that don't have a body. ([7a08ab1](https://github.com/freemountain/morph-fs/commit/7a08ab1))
* Fix failing ts 2.4 test for IndexSignatureDeclaration. ([654e5c2](https://github.com/freemountain/morph-fs/commit/654e5c2))
* Fix getting an ambient class' structure. ([48c92b5](https://github.com/freemountain/morph-fs/commit/48c92b5))
* Fix getting the relative path as a module specifier to the index file in the root directory. ([80ba49c](https://github.com/freemountain/morph-fs/commit/80ba49c))
* Fix inserting get and set accessors in an ambient context. ([a282765](https://github.com/freemountain/morph-fs/commit/a282765))
* Fix intended method name. ([cbdee2e](https://github.com/freemountain/morph-fs/commit/cbdee2e))
* Fix JSDocParameterTag not being wrapped. ([7363481](https://github.com/freemountain/morph-fs/commit/7363481))
* Fix node.findReferencesAsNodes() not returning references in initializers. ([cfeba04](https://github.com/freemountain/morph-fs/commit/cfeba04))
* Fix out of date TypeGuards by regenerating them. ([23eca82](https://github.com/freemountain/morph-fs/commit/23eca82))
* Fix printing and getting structure of FunctionDeclaration in ambient contexts. ([9940658](https://github.com/freemountain/morph-fs/commit/9940658))
* Fix scenario where adding a modifier would throw when there was an jsdoc on the parent in some scenarios. ([1fbcee6](https://github.com/freemountain/morph-fs/commit/1fbcee6))
* Fix some issues in generated ts definitions. ([0d2c00d](https://github.com/freemountain/morph-fs/commit/0d2c00d))
* Fix ts compiler types not being exported from declaration file. ([0755aa2](https://github.com/freemountain/morph-fs/commit/0755aa2))
* Fix TypeAssertion not being wrapped. ([58fc48c](https://github.com/freemountain/morph-fs/commit/58fc48c))
* Fixes setting node as a default export in ambientable situation would throw. ([66ac7e6](https://github.com/freemountain/morph-fs/commit/66ac7e6))
* For consistency, directory path should be relative to its path and not the parent. ([f832035](https://github.com/freemountain/morph-fs/commit/f832035))
* forEachDescendant would error when the node in the callback parameter was forgotten. ([152c785](https://github.com/freemountain/morph-fs/commit/152c785))
* getDiagnostics() should return the syntactic, semantic, and declaration diagnostics. ([5ea5cfc](https://github.com/freemountain/morph-fs/commit/5ea5cfc))
* getRelativePathToSourceFileAsModuleSpecifier() should return `../` instead of `./../` when going back a directory. ([a7954fa](https://github.com/freemountain/morph-fs/commit/a7954fa))
* Getting TypeAliasDeclaration structure should use the type node and not the type. ([aea96a3](https://github.com/freemountain/morph-fs/commit/aea96a3))
* ImportSpecifier and ExportSpecifier - Specifying an empty string to setAlias should not crash. ([a7beb66](https://github.com/freemountain/morph-fs/commit/a7beb66))
* IndexSignatureDeclaration.getStructure() should use the node text and not the type text. ([61f1345](https://github.com/freemountain/morph-fs/commit/61f1345))
* Insert functions with a declaration keyword without a body. ([c64009d](https://github.com/freemountain/morph-fs/commit/c64009d))
* Internally use the first name when getting the SyntaxKind name. ([cfab227](https://github.com/freemountain/morph-fs/commit/cfab227))
* Lazily create program and type checker when necessary. ([77b3889](https://github.com/freemountain/morph-fs/commit/77b3889)), closes [#188](https://github.com/freemountain/morph-fs/issues/188)
* Less strict ClassDeclaration getBaseClass ([033deb8](https://github.com/freemountain/morph-fs/commit/033deb8))
* More robust directory creation. ([21ccc2e](https://github.com/freemountain/morph-fs/commit/21ccc2e))
* NamespaceDeclaration#getDeclarationKindKeyword should never return undefined. ([0b81c00](https://github.com/freemountain/morph-fs/commit/0b81c00))
* ParameterDeclaration.getScope() should return public for readonly parameter properties with an implicit scope. ([c430eb4](https://github.com/freemountain/morph-fs/commit/c430eb4))
* Project.getSourceFile - Getting a source file by relative path should work. ([d117ecc](https://github.com/freemountain/morph-fs/commit/d117ecc))
* Project.getSourceFile should normalize the passed in path. ([c765b16](https://github.com/freemountain/morph-fs/commit/c765b16))
* Project.getSourceFileOrThrow - Improve error message when the source file can't be found. ([811ce1c](https://github.com/freemountain/morph-fs/commit/811ce1c))
* Project.getSourceFileOrThrow() should always output the passed in string in the error message. ([c81081e](https://github.com/freemountain/morph-fs/commit/c81081e))
* remove custom typings ([c465e89](https://github.com/freemountain/morph-fs/commit/c465e89))
* Removing a member throws when surrounding members have JS docs. ([fdc64c9](https://github.com/freemountain/morph-fs/commit/fdc64c9))
* Removing last modifier should not remove preceding comments. ([3aa9390](https://github.com/freemountain/morph-fs/commit/3aa9390))
* Renamed setIsOptional to setHasQuestionToken for consistency. ([ac45bba](https://github.com/freemountain/morph-fs/commit/ac45bba))
* replaceWithText should include the js docs if they exist. ([304a86a](https://github.com/freemountain/morph-fs/commit/304a86a))
* Setting string literal value by string should escape newlines and quote chars. ([d68b6b9](https://github.com/freemountain/morph-fs/commit/d68b6b9))
* ShorthandPropertyAssignment.removeObjectAssignmentInitializer was incorrectly returning undefined. ([62e2971](https://github.com/freemountain/morph-fs/commit/62e2971))
* Should escape quote char in passed in string to EnumMember.setValue(...); ([7134702](https://github.com/freemountain/morph-fs/commit/7134702))
* Should properly add statements to a case or default clause with a block. ([65d96bc](https://github.com/freemountain/morph-fs/commit/65d96bc))
* Should update a module specifier to a source file that was added after the internal reference cache was filled. ([d6c02b1](https://github.com/freemountain/morph-fs/commit/d6c02b1))
* Should write initializer if provided in EnumMemberStructure. ([35095dc](https://github.com/freemountain/morph-fs/commit/35095dc))
* **core:** add 2.4.2 version ([c2a4022](https://github.com/freemountain/morph-fs/commit/c2a4022))
* Some interfaces were missing from being exported from the main file. ([5330aba](https://github.com/freemountain/morph-fs/commit/5330aba))
* **core:** linting issue ([c231f9e](https://github.com/freemountain/morph-fs/commit/c231f9e))
* sourceFile.copy should return the current source file when copying to its own path. ([6e737e7](https://github.com/freemountain/morph-fs/commit/6e737e7))
* sourceFile.getTrailingTriviaEnd() should return the end position of the source file. ([ff6b3b3](https://github.com/freemountain/morph-fs/commit/ff6b3b3))
* sourceFile.isFromExternalLibrary() would become out of date after a manipulation. ([43c6149](https://github.com/freemountain/morph-fs/commit/43c6149))
* **type-guards:** A few nodes were not returning true for some type guards. ([f2f64b6](https://github.com/freemountain/morph-fs/commit/f2f64b6))
* Syntax kind to node mappings should include aliased kind names. ([5c7109e](https://github.com/freemountain/morph-fs/commit/5c7109e))
* The wrapped Type should be a TypeParameter when it is a ts.TypeParameter. ([23e7e94](https://github.com/freemountain/morph-fs/commit/23e7e94))
* tsconfig.json with "include" and "rootDir" would not have files correctly resolved. ([b5b9af8](https://github.com/freemountain/morph-fs/commit/b5b9af8))
* TypeGuards utility was missing some nodes. ([3ddca5d](https://github.com/freemountain/morph-fs/commit/3ddca5d))
* Update to code-block-writer 6.7.2. ([eb5bd38](https://github.com/freemountain/morph-fs/commit/eb5bd38))
* Use ReadonlyArray for array inputs. ([2a5ed73](https://github.com/freemountain/morph-fs/commit/2a5ed73))
* Virtual file system properly handles multiple globs. ([74aaca7](https://github.com/freemountain/morph-fs/commit/74aaca7))
* WeakCache and KeyValueCache weren't falling back to support ES5. ([eec9add](https://github.com/freemountain/morph-fs/commit/eec9add))
* Write more with hanging indents ([#461](https://github.com/freemountain/morph-fs/issues/461)) ([687e467](https://github.com/freemountain/morph-fs/commit/687e467))
* Writing a statemented node would not respect the manipulation settings. ([179e327](https://github.com/freemountain/morph-fs/commit/179e327))
* **manipulation:** Brace possibly placed at wrong indentation when manipulating comma & newline separated node. ([5318c0f](https://github.com/freemountain/morph-fs/commit/5318c0f))
* Writing enum member value that's a string should be surrounded in quotes. ([d5da5b6](https://github.com/freemountain/morph-fs/commit/d5da5b6))


### chore

* Update FileSystemHost to have move and copy methods. ([4401755](https://github.com/freemountain/morph-fs/commit/4401755))
* Update to code-block-writer 7.0.0. ([7121e0d](https://github.com/freemountain/morph-fs/commit/7121e0d))


### Code Refactoring

* [#160](https://github.com/freemountain/morph-fs/issues/160) - Remove DocumentationableNode.getDocumentationComment ([54c94b1](https://github.com/freemountain/morph-fs/commit/54c94b1))
* [#170](https://github.com/freemountain/morph-fs/issues/170) - Rename methods on main api. ([07f27c4](https://github.com/freemountain/morph-fs/commit/07f27c4))
* [#181](https://github.com/freemountain/morph-fs/issues/181) Rename DocumentationableNode to JSDocableNode. ([59a254e](https://github.com/freemountain/morph-fs/commit/59a254e))
* [#232](https://github.com/freemountain/morph-fs/issues/232) - HeritageClause: getTypes() -> getTypeNodes() ([ef5a369](https://github.com/freemountain/morph-fs/commit/ef5a369))
* [#429](https://github.com/freemountain/morph-fs/issues/429) - IndexSignatureDeclaration - Return type should be nullable. ([bab0860](https://github.com/freemountain/morph-fs/commit/bab0860))
* [#441](https://github.com/freemountain/morph-fs/issues/441) - Make "XExtensionType" type aliases internal. ([9ad6372](https://github.com/freemountain/morph-fs/commit/9ad6372))
* `JSDocTag.getName()` should be `.getTagName()` ([c362510](https://github.com/freemountain/morph-fs/commit/c362510))
* addDirectoryIfExists -> addExistingDirectoryIfExists ([6bb08cd](https://github.com/freemountain/morph-fs/commit/6bb08cd))
* ast.addExistingSourceFiles now takes either a single glob or multiple globs passed as an array. ([fb5b930](https://github.com/freemountain/morph-fs/commit/fb5b930))
* ClassDeclaration & InterfaceDeclaration: getAllMembers -> getMembers ([cdb186a](https://github.com/freemountain/morph-fs/commit/cdb186a))
* code-block-writer is now a named export. ([412482c](https://github.com/freemountain/morph-fs/commit/412482c))
* createDirectory will not throw if the directory exists. ([7be9dba](https://github.com/freemountain/morph-fs/commit/7be9dba))
* Deprecate `project/sourceFile.getDiagnostics()` and `program.getPreEmitDiagnostics()`. ([7e1a21b](https://github.com/freemountain/morph-fs/commit/7e1a21b))
* getImport -> getImportDeclaration. ([acd9d70](https://github.com/freemountain/morph-fs/commit/acd9d70))
* Getting and inserting/adding imports method names now includes "Declaration". ([97812cf](https://github.com/freemountain/morph-fs/commit/97812cf))
* ImportDeclaration.setDefaultImport should not rename. ([f425bd8](https://github.com/freemountain/morph-fs/commit/f425bd8))
* JsxTagNamedNode.getTagName() is now getTagNameNode() for consistency. ([36d4907](https://github.com/freemountain/morph-fs/commit/36d4907))
* Project & Directory, addSourceFileIfExists -> addExistingSourceFileIfExists. ([18caa1c](https://github.com/freemountain/morph-fs/commit/18caa1c))
* Project now accepts file system host on the options object rather than as a parameter. ([7f892fb](https://github.com/freemountain/morph-fs/commit/7f892fb))
* Remove .getReferencingNodes() found on some nodes and languageService.getDefinitionReferencingNodes() ([a20cd4e](https://github.com/freemountain/morph-fs/commit/a20cd4e))
* Remove accidentally exposed properties on errors. ([caa7e68](https://github.com/freemountain/morph-fs/commit/caa7e68))
* Remove CompilerNodeBrandPropertyNamesType. ([ac0040e](https://github.com/freemountain/morph-fs/commit/ac0040e))
* Remove Directory.remove() ([0ba8ba0](https://github.com/freemountain/morph-fs/commit/0ba8ba0))
* Remove getRelativePathToSourceFile and getRelativePathToSourceFileAsModuleSpecifier. ([734b7a0](https://github.com/freemountain/morph-fs/commit/734b7a0))
* Remove Identifier.getDefinitionReferencingNodes() ([2b1446a](https://github.com/freemountain/morph-fs/commit/2b1446a))
* Remove JSDocTag.getAtToken(). ([20ccd0a](https://github.com/freemountain/morph-fs/commit/20ccd0a))
* Remove typeParameter.getConstraintNode() and .getDefaultNode() ([e84c374](https://github.com/freemountain/morph-fs/commit/e84c374))
* Removed ExportAssignmentStructure.isEqualsExport ([0b098a5](https://github.com/freemountain/morph-fs/commit/0b098a5))
* Rename AddDirectoryOptions to DirectoryAddOptions ([ccd1627](https://github.com/freemountain/morph-fs/commit/ccd1627))
* Rename CreateSourceFileOptions to SourceFileCreateOptions and AddSourceFileOptions to SourceFileAddOptions. ([0a39f15](https://github.com/freemountain/morph-fs/commit/0a39f15))
* Rename toggleDeclareKeyword to setHasDeclareKeyword for consistency. ([0cecefe](https://github.com/freemountain/morph-fs/commit/0cecefe))
* Renamed QuoteType to QuoteKind. ([964571a](https://github.com/freemountain/morph-fs/commit/964571a))
* **file-system:** Preparing for having the ability to queue deletions. ([83e45f0](https://github.com/freemountain/morph-fs/commit/83e45f0))
* The `Options` interface was renamed to `ProjectOptions` ([15316a3](https://github.com/freemountain/morph-fs/commit/15316a3))
* Uses a WeakMap for wrapped Symbols, Types, etc. Internally created an Es5WeakMap. ([177dfe6](https://github.com/freemountain/morph-fs/commit/177dfe6))


### Features

* **core:** add 2.4.2 version ([15519b0](https://github.com/freemountain/morph-fs/commit/15519b0))
* **core:** support failing tests ([f23a7dc](https://github.com/freemountain/morph-fs/commit/f23a7dc))
* **core:** support multiple TypeScript versions ([c52ad48](https://github.com/freemountain/morph-fs/commit/c52ad48)), closes [#144](https://github.com/freemountain/morph-fs/issues/144)
* **Manipulation:** [#65](https://github.com/freemountain/morph-fs/issues/65) - Setting and removing initializers from (Shorthand)PropertyAssignments ([dc3a61c](https://github.com/freemountain/morph-fs/commit/dc3a61c))
* [#317](https://github.com/freemountain/morph-fs/issues/317) - Make Identifier a ReferenceFindableNode. ([652d00d](https://github.com/freemountain/morph-fs/commit/652d00d))
* **navigation:** [#140](https://github.com/freemountain/morph-fs/issues/140) - Forget blocks. ([f5a8b39](https://github.com/freemountain/morph-fs/commit/f5a8b39))
* [#103](https://github.com/freemountain/morph-fs/issues/103) - ClassDeclaration: Add .getBaseTypes() and .getBaseClass() ([e84252b](https://github.com/freemountain/morph-fs/commit/e84252b))
* [#126](https://github.com/freemountain/morph-fs/issues/126) - Ability to emit to memory. ([4f6fb5a](https://github.com/freemountain/morph-fs/commit/4f6fb5a))
* [#131](https://github.com/freemountain/morph-fs/issues/131) - Ability to add statements within blocks. ([f2bb4de](https://github.com/freemountain/morph-fs/commit/f2bb4de))
* [#138](https://github.com/freemountain/morph-fs/issues/138) - getInitializerIfKind improvement. ([e0b88ba](https://github.com/freemountain/morph-fs/commit/e0b88ba))
* [#145](https://github.com/freemountain/morph-fs/issues/145) - Add JSDoc.getInnerText - Returns text without surrounding comment. ([a62cec4](https://github.com/freemountain/morph-fs/commit/a62cec4))
* [#148](https://github.com/freemountain/morph-fs/issues/148), [#320](https://github.com/freemountain/morph-fs/issues/320) - Add WriterFunctions.object. ([dab4cfb](https://github.com/freemountain/morph-fs/commit/dab4cfb))
* [#153](https://github.com/freemountain/morph-fs/issues/153) - Ability to insert named exports and imports with a writer. ([aa5617e](https://github.com/freemountain/morph-fs/commit/aa5617e))
* [#154](https://github.com/freemountain/morph-fs/issues/154) - Configuration for spaces surrounding named imports and exports. ([76ce4ad](https://github.com/freemountain/morph-fs/commit/76ce4ad))
* [#161](https://github.com/freemountain/morph-fs/issues/161) - Rename getDocumentationCommentNodes to getDocNodes ([d29820f](https://github.com/freemountain/morph-fs/commit/d29820f))
* [#164](https://github.com/freemountain/morph-fs/issues/164) - Support ExpressionStatements. ([d7d48a1](https://github.com/freemountain/morph-fs/commit/d7d48a1))
* [#166](https://github.com/freemountain/morph-fs/issues/166) - Add ReturnStatement. ([23eccf1](https://github.com/freemountain/morph-fs/commit/23eccf1))
* [#168](https://github.com/freemountain/morph-fs/issues/168) - Add SourceFile.refreshFromFileSystem() ([9ddcdd4](https://github.com/freemountain/morph-fs/commit/9ddcdd4))
* [#169](https://github.com/freemountain/morph-fs/issues/169) - Directories. ([332c44d](https://github.com/freemountain/morph-fs/commit/332c44d))
* [#173](https://github.com/freemountain/morph-fs/issues/173) - SemicolonToken type guard. ([77d600a](https://github.com/freemountain/morph-fs/commit/77d600a))
* [#174](https://github.com/freemountain/morph-fs/issues/174) - Getting a source file by name or condition walks directories. ([e4f4b45](https://github.com/freemountain/morph-fs/commit/e4f4b45))
* [#176](https://github.com/freemountain/morph-fs/issues/176) - Support transformations using the compiler API (`Node#transform(...)`) ([3b39edb](https://github.com/freemountain/morph-fs/commit/3b39edb))
* [#177](https://github.com/freemountain/morph-fs/issues/177) - Ability to use virtual file system. ([ae27f5b](https://github.com/freemountain/morph-fs/commit/ae27f5b))
* [#180](https://github.com/freemountain/morph-fs/issues/180) - Directory - isAncestorOf and isDescendantOf ([7b259d9](https://github.com/freemountain/morph-fs/commit/7b259d9))
* [#184](https://github.com/freemountain/morph-fs/issues/184) - Ability to copy directories. ([18f1e7b](https://github.com/freemountain/morph-fs/commit/18f1e7b))
* [#185](https://github.com/freemountain/morph-fs/issues/185) - Ability to save all descendant files in a directory. ([334f20b](https://github.com/freemountain/morph-fs/commit/334f20b))
* [#187](https://github.com/freemountain/morph-fs/issues/187) - Added TypeGuards.hasExpression. ([6e37480](https://github.com/freemountain/morph-fs/commit/6e37480))
* [#191](https://github.com/freemountain/morph-fs/issues/191) - Add SourceFile.getEmitOutput(). ([1707a7d](https://github.com/freemountain/morph-fs/commit/1707a7d))
* [#194](https://github.com/freemountain/morph-fs/issues/194) - Add async version of forget block. ([c73dd05](https://github.com/freemountain/morph-fs/commit/c73dd05))
* [#199](https://github.com/freemountain/morph-fs/issues/199) - Add SourceFile.move(...), .getReferencingSourceFiles(), and .getReferencingImportAndExportDeclarations(). ([f22db6c](https://github.com/freemountain/morph-fs/commit/f22db6c))
* [#200](https://github.com/freemountain/morph-fs/issues/200) - Add BooleanLiteral. ([6cc7917](https://github.com/freemountain/morph-fs/commit/6cc7917))
* [#201](https://github.com/freemountain/morph-fs/issues/201) - Add BinaryExpression. ([71a75bf](https://github.com/freemountain/morph-fs/commit/71a75bf))
* [#204](https://github.com/freemountain/morph-fs/issues/204) - Add IfStatement. ([095eb24](https://github.com/freemountain/morph-fs/commit/095eb24))
* [#204](https://github.com/freemountain/morph-fs/issues/204) - Add IterationStatement, Do, ForIn, ForOf, For, While ([ce40dee](https://github.com/freemountain/morph-fs/commit/ce40dee))
* [#204](https://github.com/freemountain/morph-fs/issues/204) - Add WithStatement. ([215383a](https://github.com/freemountain/morph-fs/commit/215383a))
* [#213](https://github.com/freemountain/morph-fs/issues/213) - Add NoSubstitutionTemplateLiteral. ([e0fd583](https://github.com/freemountain/morph-fs/commit/e0fd583))
* [#231](https://github.com/freemountain/morph-fs/issues/231) - Node.formatText() - Format individual nodes. ([34f61ea](https://github.com/freemountain/morph-fs/commit/34f61ea))
* [#237](https://github.com/freemountain/morph-fs/issues/237) - Add node.getLeadingCommentRanges() and .getTrailingCommentRanges(). ([9678b3d](https://github.com/freemountain/morph-fs/commit/9678b3d))
* [#240](https://github.com/freemountain/morph-fs/issues/240) - Ability to add/insert JSX attributes. ([e2b4a99](https://github.com/freemountain/morph-fs/commit/e2b4a99))
* [#240](https://github.com/freemountain/morph-fs/issues/240) - Ability to remove JSX attributes. ([1bf7642](https://github.com/freemountain/morph-fs/commit/1bf7642))
* [#240](https://github.com/freemountain/morph-fs/issues/240) - Wrap JSX nodes. ([aa4d70a](https://github.com/freemountain/morph-fs/commit/aa4d70a))
* [#242](https://github.com/freemountain/morph-fs/issues/242) - Wrap IndexSignatureDeclaration. ([3dab39f](https://github.com/freemountain/morph-fs/commit/3dab39f))
* [#245](https://github.com/freemountain/morph-fs/issues/245) - IndexSignatureDeclaration - Add support for readonly keyword. ([2624f8b](https://github.com/freemountain/morph-fs/commit/2624f8b))
* [#249](https://github.com/freemountain/morph-fs/issues/249) - Remove TypeScript compiler peer dependency. ([db9f0fc](https://github.com/freemountain/morph-fs/commit/db9f0fc))
* [#250](https://github.com/freemountain/morph-fs/issues/250) - Accept strings for named imports and exports. ([8867b71](https://github.com/freemountain/morph-fs/commit/8867b71))
* [#251](https://github.com/freemountain/morph-fs/issues/251) - Add importDeclaration.removeNamespaceImport() and .getNamespaceImportOrThrow() ([0250138](https://github.com/freemountain/morph-fs/commit/0250138))
* [#252](https://github.com/freemountain/morph-fs/issues/252) - Add Type.isNullable. ([f2dfd1f](https://github.com/freemountain/morph-fs/commit/f2dfd1f))
* [#256](https://github.com/freemountain/morph-fs/issues/256) - Add Directory.copyImmediately. ([f2b01dc](https://github.com/freemountain/morph-fs/commit/f2b01dc))
* [#256](https://github.com/freemountain/morph-fs/issues/256) - Add Directory.move(...) ([29b776a](https://github.com/freemountain/morph-fs/commit/29b776a))
* [#256](https://github.com/freemountain/morph-fs/issues/256) - Add Directory.moveImmediately. ([255d01c](https://github.com/freemountain/morph-fs/commit/255d01c))
* [#259](https://github.com/freemountain/morph-fs/issues/259) - Wrap TypeLiteralNode. ([d479100](https://github.com/freemountain/morph-fs/commit/d479100))
* [#268](https://github.com/freemountain/morph-fs/issues/268) - Ancestor directories are now lazily loaded. ([1169b54](https://github.com/freemountain/morph-fs/commit/1169b54))
* [#273](https://github.com/freemountain/morph-fs/issues/273) - Add overwrite option to createSourceFile. ([ddcd03e](https://github.com/freemountain/morph-fs/commit/ddcd03e))
* [#276](https://github.com/freemountain/morph-fs/issues/276) - Improvements to moving source files. ([dd03789](https://github.com/freemountain/morph-fs/commit/dd03789))
* [#278](https://github.com/freemountain/morph-fs/issues/278) - Add Type.isTupleType ([d7c3c3d](https://github.com/freemountain/morph-fs/commit/d7c3c3d))
* [#279](https://github.com/freemountain/morph-fs/issues/279) - Add StatementedNode.getDescendantStatements(). ([3b8b093](https://github.com/freemountain/morph-fs/commit/3b8b093))
* [#279](https://github.com/freemountain/morph-fs/issues/279) - Move .getDescendantStatements() to Node and improve performance. ([e397aa2](https://github.com/freemountain/morph-fs/commit/e397aa2))
* [#280](https://github.com/freemountain/morph-fs/issues/280) - Add setLiteralValue to more literals. ([38c1570](https://github.com/freemountain/morph-fs/commit/38c1570))
* [#286](https://github.com/freemountain/morph-fs/issues/286) - Populate all directories as specified in tsconfig.json ([206e795](https://github.com/freemountain/morph-fs/commit/206e795))
* [#287](https://github.com/freemountain/morph-fs/issues/287) - Descendant directories are populated based on file globs passed to addExistingSourceFiles ([402d395](https://github.com/freemountain/morph-fs/commit/402d395))
* [#291](https://github.com/freemountain/morph-fs/issues/291) - Add Type: isNumberLiteral, isStringLiteral(), and isBooleanLiteral(). ([10e40cb](https://github.com/freemountain/morph-fs/commit/10e40cb))
* [#293](https://github.com/freemountain/morph-fs/issues/293) - Upgrade to TypeScript 2.8.1 ([16e5962](https://github.com/freemountain/morph-fs/commit/16e5962))
* [#294](https://github.com/freemountain/morph-fs/issues/294) - Add sourceFile.organizeImports() ([4f3b2ff](https://github.com/freemountain/morph-fs/commit/4f3b2ff))
* [#294](https://github.com/freemountain/morph-fs/issues/294) - Wrap languageService.organizeImports(...). ([154bf2e](https://github.com/freemountain/morph-fs/commit/154bf2e))
* [#295](https://github.com/freemountain/morph-fs/issues/295) - ClassDeclaration now has a nullable name. ([96b9857](https://github.com/freemountain/morph-fs/commit/96b9857))
* [#297](https://github.com/freemountain/morph-fs/issues/297) - Simpler findReferences() and getDefinitions() that only returns nodes. ([4048116](https://github.com/freemountain/morph-fs/commit/4048116))
* [#300](https://github.com/freemountain/morph-fs/issues/300) - Fix more nodes to have .findReferences() and .getReferencingNodes() ([9ae7383](https://github.com/freemountain/morph-fs/commit/9ae7383))
* [#302](https://github.com/freemountain/morph-fs/issues/302) - Add CompilerNodeToWrappedType. ([0ce5af5](https://github.com/freemountain/morph-fs/commit/0ce5af5))
* [#304](https://github.com/freemountain/morph-fs/issues/304) - Improve getNodeProperty by using condition types. Add CompilerNodeToWrapperMappings. ([5bd2926](https://github.com/freemountain/morph-fs/commit/5bd2926))
* [#306](https://github.com/freemountain/morph-fs/issues/306) - Add Node.forEachChild and Node.forEachDescendant ([9eabe57](https://github.com/freemountain/morph-fs/commit/9eabe57))
* [#311](https://github.com/freemountain/morph-fs/issues/311) - Allow providing a string instead of a JSDoc structure. ([a0b16e6](https://github.com/freemountain/morph-fs/commit/a0b16e6))
* [#320](https://github.com/freemountain/morph-fs/issues/320) - Add ability to set initializer in a structure with a writer function. ([20e51ed](https://github.com/freemountain/morph-fs/commit/20e51ed))
* [#324](https://github.com/freemountain/morph-fs/issues/324) - Added ClassDeclaration.insertConstructors() and addConstructors(). ([2aefd93](https://github.com/freemountain/morph-fs/commit/2aefd93))
* [#337](https://github.com/freemountain/morph-fs/issues/337) - Add DiagnosticWithLocation. ([f1f700e](https://github.com/freemountain/morph-fs/commit/f1f700e))
* [#337](https://github.com/freemountain/morph-fs/issues/337) - Add DocumentSpan - getOriginalTextSpan and getOriginalFileName ([254bea8](https://github.com/freemountain/morph-fs/commit/254bea8))
* [#337](https://github.com/freemountain/morph-fs/issues/337) - DefinitionInfo now extends DocumentSpan as done in ts 2.9. ([c1ff983](https://github.com/freemountain/morph-fs/commit/c1ff983))
* [#338](https://github.com/freemountain/morph-fs/issues/338) - Add Diagnostic.getLineNumber() ([4cba457](https://github.com/freemountain/morph-fs/commit/4cba457))
* [#339](https://github.com/freemountain/morph-fs/issues/339) - Add Directory.addExistingSourceFiles(...). ([bb5cd6e](https://github.com/freemountain/morph-fs/commit/bb5cd6e))
* [#342](https://github.com/freemountain/morph-fs/issues/342) - Finish work on removing property assignment. ([9e35623](https://github.com/freemountain/morph-fs/commit/9e35623))
* [#343](https://github.com/freemountain/morph-fs/issues/343) - Ability to remove more object literal expression members ([e82d45f](https://github.com/freemountain/morph-fs/commit/e82d45f))
* [#347](https://github.com/freemountain/morph-fs/issues/347) - Add .skip() and .up() method to `forEachDescendant`. ([361bcaf](https://github.com/freemountain/morph-fs/commit/361bcaf))
* [#355](https://github.com/freemountain/morph-fs/issues/355) - Add `getLengthFromLineStartAtPos` to replace `getColumnAtPos` in next major. ([e82cdff](https://github.com/freemountain/morph-fs/commit/e82cdff))
* [#363](https://github.com/freemountain/morph-fs/issues/363) - Add type guard overloads to methods with a condition for a node. ([21da2fc](https://github.com/freemountain/morph-fs/commit/21da2fc))
* [#369](https://github.com/freemountain/morph-fs/issues/369) - FunctionDeclaration should have an optional name. ([176825d](https://github.com/freemountain/morph-fs/commit/176825d))
* [#37](https://github.com/freemountain/morph-fs/issues/37) - Add StringLiteral.getQuoteType ([adad446](https://github.com/freemountain/morph-fs/commit/adad446))
* [#370](https://github.com/freemountain/morph-fs/issues/370) - Add RenameableNode. ([1d18158](https://github.com/freemountain/morph-fs/commit/1d18158))
* [#375](https://github.com/freemountain/morph-fs/issues/375) - Add ObjectBindingPattern, ArrayBindingPattern, and BindingElement. ([7d82126](https://github.com/freemountain/morph-fs/commit/7d82126))
* [#380](https://github.com/freemountain/morph-fs/issues/380) - Expose options to rename in comments and strings ([29592c7](https://github.com/freemountain/morph-fs/commit/29592c7))
* [#381](https://github.com/freemountain/morph-fs/issues/381) - getParent() and getParentOrThrow() return the correct type based on the type of the current node. ([efa7616](https://github.com/freemountain/morph-fs/commit/efa7616))
* [#383](https://github.com/freemountain/morph-fs/issues/383) - Update to TS 3.0 ([547eb3d](https://github.com/freemountain/morph-fs/commit/547eb3d))
* [#390](https://github.com/freemountain/morph-fs/issues/390) - Add Node.getFirstAncestor and getFirstAncestorOrThrow methods. ([f83be80](https://github.com/freemountain/morph-fs/commit/f83be80))
* [#400](https://github.com/freemountain/morph-fs/issues/400) - Symbol - Add global exports. ([2bbeff9](https://github.com/freemountain/morph-fs/commit/2bbeff9))
* [#406](https://github.com/freemountain/morph-fs/issues/406) - Wrap ParenthesizedTypeNode. ([9429704](https://github.com/freemountain/morph-fs/commit/9429704))
* [#409](https://github.com/freemountain/morph-fs/issues/409) - Add ability to specify custom transformers when emitting. ([644eba5](https://github.com/freemountain/morph-fs/commit/644eba5))
* [#415](https://github.com/freemountain/morph-fs/issues/415) - Fix "typeRoots" compiler option not working. ([5e4cd08](https://github.com/freemountain/morph-fs/commit/5e4cd08))
* [#418](https://github.com/freemountain/morph-fs/issues/418) - Add new .set methods and deprecate .fill ([da40d99](https://github.com/freemountain/morph-fs/commit/da40d99))
* [#42](https://github.com/freemountain/morph-fs/issues/42) - Ability to pass in type checker to wrapped node. ([62b377f](https://github.com/freemountain/morph-fs/commit/62b377f))
* [#423](https://github.com/freemountain/morph-fs/issues/423) - Add node.getText(true) for getting text with js docs. ([0522510](https://github.com/freemountain/morph-fs/commit/0522510))
* [#431](https://github.com/freemountain/morph-fs/issues/431) - Allow passing in a module specifier string to .getImportDeclaration and .getExportDeclaration ([20b45d2](https://github.com/freemountain/morph-fs/commit/20b45d2))
* [#436](https://github.com/freemountain/morph-fs/issues/436) - Add support for import and exports to NamespaceDeclaration ([65d4bf2](https://github.com/freemountain/morph-fs/commit/65d4bf2))
* [#439](https://github.com/freemountain/morph-fs/issues/439) - Improve type guards to use extension type for mixins. ([1ca6dd3](https://github.com/freemountain/morph-fs/commit/1ca6dd3))
* [#443](https://github.com/freemountain/morph-fs/issues/443) Better support for `global` namespace declarations ([d89fd96](https://github.com/freemountain/morph-fs/commit/d89fd96))
* [#445](https://github.com/freemountain/morph-fs/issues/445) - SourceFile, Directory - Add moveToDirectory and copyToDirectory. ([fc806da](https://github.com/freemountain/morph-fs/commit/fc806da))
* [#449](https://github.com/freemountain/morph-fs/issues/449) - Wrap ImportClause. ([c66ed65](https://github.com/freemountain/morph-fs/commit/c66ed65))
* [#45](https://github.com/freemountain/morph-fs/issues/45) / [#346](https://github.com/freemountain/morph-fs/issues/346) - Add .getStructure() ([2d7351c](https://github.com/freemountain/morph-fs/commit/2d7351c))
* [#454](https://github.com/freemountain/morph-fs/issues/454) - Wrap NamespaceImport. ([001e7d0](https://github.com/freemountain/morph-fs/commit/001e7d0))
* [#456](https://github.com/freemountain/morph-fs/issues/456) - Relax ts dependency to 3.0.1 and 3.0.3. ([1029f75](https://github.com/freemountain/morph-fs/commit/1029f75))
* [#46](https://github.com/freemountain/morph-fs/issues/46) - Ability to set node from a structure using .set methods ([22d4753](https://github.com/freemountain/morph-fs/commit/22d4753))
* [#467](https://github.com/freemountain/morph-fs/issues/467) - Move some ClassDeclaration functionality into ClassLikeDeclarationBase. ([fdb5f42](https://github.com/freemountain/morph-fs/commit/fdb5f42))
* [#467](https://github.com/freemountain/morph-fs/issues/467) - Wrap ClassExpression. ([92f4be3](https://github.com/freemountain/morph-fs/commit/92f4be3))
* [#469](https://github.com/freemountain/morph-fs/issues/469) - ClassDeclaration - Add "Extract interface" ([8b19131](https://github.com/freemountain/morph-fs/commit/8b19131))
* [#471](https://github.com/freemountain/morph-fs/issues/471) - Add `Project.formatDiagnosticsWithColorAndContext(diagnostics)` ([3056a1e](https://github.com/freemountain/morph-fs/commit/3056a1e))
* [#472](https://github.com/freemountain/morph-fs/issues/472) - Add getBodyText() to BodiedNode and BodyableNode ([e41c278](https://github.com/freemountain/morph-fs/commit/e41c278))
* [#473](https://github.com/freemountain/morph-fs/issues/473) - MethodDeclaration should extend QuestionTokenableNode. ([674d3d2](https://github.com/freemountain/morph-fs/commit/674d3d2))
* [#488](https://github.com/freemountain/morph-fs/issues/488) - LanguageService - getSuggestionDiagnostics, getEditsForRefactor, getCodeFixesAtPosition ([9e42b10](https://github.com/freemountain/morph-fs/commit/9e42b10))
* [#491](https://github.com/freemountain/morph-fs/issues/491) Add project.applyFileTextChanges ([4de796c](https://github.com/freemountain/morph-fs/commit/4de796c))
* [#492](https://github.com/freemountain/morph-fs/issues/492) - Resolve dependencies when constructing a project and providing a tsconfig. ([548ae43](https://github.com/freemountain/morph-fs/commit/548ae43))
* [#505](https://github.com/freemountain/morph-fs/issues/505) - TypeParameteredNodeStructure - Accept strings ([a11ff0a](https://github.com/freemountain/morph-fs/commit/a11ff0a))
* [#506](https://github.com/freemountain/morph-fs/issues/506) - Get variable statement by a declaration's name. ([6b94548](https://github.com/freemountain/morph-fs/commit/6b94548))
* [#508](https://github.com/freemountain/morph-fs/issues/508) - Expose Node.forgetDescendants. ([ee87eac](https://github.com/freemountain/morph-fs/commit/ee87eac))
* [#511](https://github.com/freemountain/morph-fs/issues/511) - createSourceFile - Added ability to pass in a writer function. ([9a04103](https://github.com/freemountain/morph-fs/commit/9a04103))
* [#518](https://github.com/freemountain/morph-fs/issues/518) - Add SourceFile#fixMissingImports() ([28d12e3](https://github.com/freemountain/morph-fs/commit/28d12e3))
* [#520](https://github.com/freemountain/morph-fs/issues/520) - Search object and array binding patterns when looking for a node by a name. ([20239d7](https://github.com/freemountain/morph-fs/commit/20239d7))
* [#522](https://github.com/freemountain/morph-fs/issues/522) - Project should not return implicitly resolved files and directories in most scenarios. ([73c5a39](https://github.com/freemountain/morph-fs/commit/73c5a39))
* [#523](https://github.com/freemountain/morph-fs/issues/523) - Resolved node_module source files or directories are no longer returned from Project#getSourceFiles() and getDirectories() ([6cf2d40](https://github.com/freemountain/morph-fs/commit/6cf2d40))
* [#527](https://github.com/freemountain/morph-fs/issues/527) - Adding namespace with quotes defaults to ambient module. ([fadeeea](https://github.com/freemountain/morph-fs/commit/fadeeea))
* [#530](https://github.com/freemountain/morph-fs/issues/530) - Add JSDocTypeExpression ([ddc1dd3](https://github.com/freemountain/morph-fs/commit/ddc1dd3))
* [#532](https://github.com/freemountain/morph-fs/issues/532) - Expose isBracketed on JSDocPropertyLikeTag ([1acc955](https://github.com/freemountain/morph-fs/commit/1acc955))
* [#535](https://github.com/freemountain/morph-fs/issues/535) - Add getTypeExpression() to JSDocReturnTag and JSDocTypeTag ([61b71b3](https://github.com/freemountain/morph-fs/commit/61b71b3))
* [#538](https://github.com/freemountain/morph-fs/issues/538) - Add Type#isAny() ([1d3c2bb](https://github.com/freemountain/morph-fs/commit/1d3c2bb))
* [#541](https://github.com/freemountain/morph-fs/issues/541) - Add TypeChecker#getResolvedSignature() ([cf5104d](https://github.com/freemountain/morph-fs/commit/cf5104d))
* [#543](https://github.com/freemountain/morph-fs/issues/543) - Wrap IndexedAccessTypeNode. ([a1d5696](https://github.com/freemountain/morph-fs/commit/a1d5696))
* [#547](https://github.com/freemountain/morph-fs/issues/547) - Wrap JSDocSignature and JSDocType. ([9e1b0b2](https://github.com/freemountain/morph-fs/commit/9e1b0b2))
* [#553](https://github.com/freemountain/morph-fs/issues/553) - VariableDeclaration now has read exportable methods like isDefaultExport(). ([0991e96](https://github.com/freemountain/morph-fs/commit/0991e96))
* [#59](https://github.com/freemountain/morph-fs/issues/59) - Get parameter, type parameter, or decorator by name. ([f889515](https://github.com/freemountain/morph-fs/commit/f889515))
* [#65](https://github.com/freemountain/morph-fs/issues/65) - Navigation and manipulation of object literal expressions. ([d9d1621](https://github.com/freemountain/morph-fs/commit/d9d1621))
* [#7](https://github.com/freemountain/morph-fs/issues/7) - Ability to import files from tsconfig. ([b538537](https://github.com/freemountain/morph-fs/commit/b538537))
* [#7](https://github.com/freemountain/morph-fs/issues/7) - Some fixes to importing files from tsconfig. ([2a95bc2](https://github.com/freemountain/morph-fs/commit/2a95bc2))
* [#7](https://github.com/freemountain/morph-fs/issues/7) - Specified compiler options and tsconfig path are both used to determine added files. ([20e7b77](https://github.com/freemountain/morph-fs/commit/20e7b77))
* [#74](https://github.com/freemountain/morph-fs/issues/74) - Add more "OrThrow" methods. ([2d5c94d](https://github.com/freemountain/morph-fs/commit/2d5c94d))
* Ability to add js docs with a writer function directly from the method. ([4ad9614](https://github.com/freemountain/morph-fs/commit/4ad9614))
* Ability to add/insert an argument with a writer. ([e1bcb6a](https://github.com/freemountain/morph-fs/commit/e1bcb6a))
* Ability to easily check if an external module reference is relative. ([f8676f0](https://github.com/freemountain/morph-fs/commit/f8676f0))
* Ability to easily get an ImportEqualsDeclaration and ExternalModuleReference's referenced source file. ([c6d7c7b](https://github.com/freemountain/morph-fs/commit/c6d7c7b))
* Ability to get a directory from directory based on a relative path. ([b7714c5](https://github.com/freemountain/morph-fs/commit/b7714c5))
* Ability to get source file from directory based on relative or absolute path. ([fb72396](https://github.com/freemountain/morph-fs/commit/fb72396))
* Ability to set a DecoratorStructure's arguments using a writer function. ([585793c](https://github.com/freemountain/morph-fs/commit/585793c))
* Ability to set a IndexSignatureDeclaration's return type using a writer function. ([0d6526d](https://github.com/freemountain/morph-fs/commit/0d6526d))
* Ability to set a JSDoc's description in a structure by using a writer. ([0250ae1](https://github.com/freemountain/morph-fs/commit/0250ae1))
* Ability to set a PropertyAssignment's initializer using a writer function. ([b633937](https://github.com/freemountain/morph-fs/commit/b633937))
* Ability to set a return type with a writer. ([3db81f8](https://github.com/freemountain/morph-fs/commit/3db81f8))
* Ability to set a SourceFileStructure's bodyText using a writer function. ([792c530](https://github.com/freemountain/morph-fs/commit/792c530))
* Ability to set a SpreadAssignmentStructure's expression using a writer function. ([e7e0158](https://github.com/freemountain/morph-fs/commit/e7e0158))
* Ability to set a type with a writer. ([5dc3565](https://github.com/freemountain/morph-fs/commit/5dc3565))
* Ability to set an initializer's text using a writer. ([2c1a9e5](https://github.com/freemountain/morph-fs/commit/2c1a9e5))
* Add .findReferencesAsNodes() to deprecate .getReferencingNodes() in next major. ([a8a731a](https://github.com/freemountain/morph-fs/commit/a8a731a))
* Add .getType() to InterfaceDeclaration and ClassDeclaration. ([3c8ca33](https://github.com/freemountain/morph-fs/commit/3c8ca33))
* Add `.getSignature()` method to nodes that have a return type. ([f65c529](https://github.com/freemountain/morph-fs/commit/f65c529))
* Add `Directory.getRelativePathAsModuleSpecifierTo` and `getRelativePathTo` ([5d5fa08](https://github.com/freemountain/morph-fs/commit/5d5fa08))
* Add `JSDocPropertyLikeTag.getName()` and `.getNameNode()` ([9804627](https://github.com/freemountain/morph-fs/commit/9804627))
* Add `program.getGlobalDiagnostics()`. ([a03d257](https://github.com/freemountain/morph-fs/commit/a03d257))
* Add `Project.getAmbientModules()`, `.getAmbientModule(name: string)`, and `.getAmbientModuleOrThrow(name: string)` ([7f89eea](https://github.com/freemountain/morph-fs/commit/7f89eea))
* Add ability to add/insert type parameters with a default type node. ([cd05c3f](https://github.com/freemountain/morph-fs/commit/cd05c3f))
* Add addDirectoryIfExists and addSourceFileIfExists ([0ff4ff2](https://github.com/freemountain/morph-fs/commit/0ff4ff2))
* Add aliases CallLikeExpression and JsxOpeningLikeElement. ([030c6df](https://github.com/freemountain/morph-fs/commit/030c6df))
* Add ast.getFileSystem() ([3364349](https://github.com/freemountain/morph-fs/commit/3364349))
* Add ast.getPreEmitDiagnostics() ([a561994](https://github.com/freemountain/morph-fs/commit/a561994))
* Add ast.manipulationSettings.getEditorSettings() (mostly used internally for the default) ([af82884](https://github.com/freemountain/morph-fs/commit/af82884))
* Add CallSignatureDeclaration. ([3067c2b](https://github.com/freemountain/morph-fs/commit/3067c2b)), closes [#226](https://github.com/freemountain/morph-fs/issues/226)
* Add ClassDeclaration - getExtendsOrThrow() and getBaseClassOrThrow. ([3e24db4](https://github.com/freemountain/morph-fs/commit/3e24db4)), closes [#74](https://github.com/freemountain/morph-fs/issues/74)
* Add deprecation warning to sourceFile.getDiagnostics() and project.getDiagnostics(). Use .getPreEmitDiagnostics instead. ([dd90b1e](https://github.com/freemountain/morph-fs/commit/dd90b1e))
* Add Directory.forget(). Will deprecate Directory.remove() in next major. ([f584d20](https://github.com/freemountain/morph-fs/commit/f584d20))
* Add Directory.getDescendantDirectories. ([d576acb](https://github.com/freemountain/morph-fs/commit/d576acb))
* Add ExportAssignment. ([f2b346b](https://github.com/freemountain/morph-fs/commit/f2b346b))
* Add ExportAssignment.setExpression ([0c6fcf0](https://github.com/freemountain/morph-fs/commit/0c6fcf0))
* Add ExportAssignment.setIsExportEquals. ([43d3d84](https://github.com/freemountain/morph-fs/commit/43d3d84))
* Add ExportDeclaration.removeModuleSpecifier() ([b64c665](https://github.com/freemountain/morph-fs/commit/b64c665))
* Add ExportSpecifier.getName() ([b6357c6](https://github.com/freemountain/morph-fs/commit/b6357c6))
* Add ExpressionedNode.setExpression ([12e0ca7](https://github.com/freemountain/morph-fs/commit/12e0ca7))
* Add ExternalModuleReference and ImportEqualsDeclaration. ([c140982](https://github.com/freemountain/morph-fs/commit/c140982)), closes [#225](https://github.com/freemountain/morph-fs/issues/225)
* Add FileTextChanges#getSourceFile() ([85deec7](https://github.com/freemountain/morph-fs/commit/85deec7))
* Add functions and variables to typescript declaration file. ([451840b](https://github.com/freemountain/morph-fs/commit/451840b))
* Add getAttribute to JsxOpeningElement and JsxSelfClosingElement. ([7dbe0f7](https://github.com/freemountain/morph-fs/commit/7dbe0f7))
* Add getAttributeOrThrow for jsx nodes with attributes. ([93a0fbd](https://github.com/freemountain/morph-fs/commit/93a0fbd))
* Add ImportDeclaration & ExportDeclaration .getModuleSpecifierValue(). ([1785054](https://github.com/freemountain/morph-fs/commit/1785054))
* Add ImportDeclaration.getImportClause() and .getImportClauseOrThrow() ([8d99c27](https://github.com/freemountain/morph-fs/commit/8d99c27))
* Add ImportDeclaration.removeDefaultImport() ([87dd9cf](https://github.com/freemountain/morph-fs/commit/87dd9cf))
* Add ImportDeclaration.renameDefaultImport. ([1ba29be](https://github.com/freemountain/morph-fs/commit/1ba29be))
* Add ImportEqualsDeclaration.setExternalModuleReference(...). ([e3396d3](https://github.com/freemountain/morph-fs/commit/e3396d3))
* Add ImportTypeNode. ([3d0203c](https://github.com/freemountain/morph-fs/commit/3d0203c))
* Add isInStringAtPos to Node. ([cfcf256](https://github.com/freemountain/morph-fs/commit/cfcf256))
* Add JSDocableNode to ExpressionStatement and LabeledStatement. ([00c2a89](https://github.com/freemountain/morph-fs/commit/00c2a89)), closes [#193](https://github.com/freemountain/morph-fs/issues/193)
* Add JSDocTag#getName(). ([0c868e9](https://github.com/freemountain/morph-fs/commit/0c868e9))
* Add JsxAttribute .setInitializer & .removeInitializer ([9436954](https://github.com/freemountain/morph-fs/commit/9436954))
* Add JsxElement setBodyText and setBodyTextInline. ([1420786](https://github.com/freemountain/morph-fs/commit/1420786))
* Add JsxSpreadAttribute.setExpression ([532131f](https://github.com/freemountain/morph-fs/commit/532131f))
* Add languageService.getIdentationAtPosition(...) ([4de5f82](https://github.com/freemountain/morph-fs/commit/4de5f82))
* Add LanguageService#getCombinedCodeFix(...) ([ef9f3a3](https://github.com/freemountain/morph-fs/commit/ef9f3a3))
* Add more type guards. ([4a1a92d](https://github.com/freemountain/morph-fs/commit/4a1a92d))
* Add new getImportStringLiterals() method. ([a1b967f](https://github.com/freemountain/morph-fs/commit/a1b967f)), closes [#276](https://github.com/freemountain/morph-fs/issues/276)
* Add new project.compilerOptions property that has the ability to change the compiler options. ([4da80ba](https://github.com/freemountain/morph-fs/commit/4da80ba))
* Add Node.getEndLineNumber() ([f00ca4c](https://github.com/freemountain/morph-fs/commit/f00ca4c))
* Add Node.getFullStart ([9d44185](https://github.com/freemountain/morph-fs/commit/9d44185))
* Add Node.getLeadingTriviaWidth(). ([09bdd01](https://github.com/freemountain/morph-fs/commit/09bdd01))
* Add Node.getStartColumn(), Node.getEndColumn(), SourceFile.getColumnAtPos(pos). ([5119e83](https://github.com/freemountain/morph-fs/commit/5119e83))
* Add Node.getSymbolOrThrow() ([6abbe7f](https://github.com/freemountain/morph-fs/commit/6abbe7f))
* Add Node.getTrailingTriviaEnd() and .getTrailingTriviaWidth() ([98cd0b0](https://github.com/freemountain/morph-fs/commit/98cd0b0))
* Add Node.getType() ([2f15bd9](https://github.com/freemountain/morph-fs/commit/2f15bd9))
* Add overwrite option to source file and directory copy. ([0741180](https://github.com/freemountain/morph-fs/commit/0741180))
* Add printNode utility function and Node.print() ([d6c2313](https://github.com/freemountain/morph-fs/commit/d6c2313))
* Add Program.getEmitModuleResolutionKind(). ([447573f](https://github.com/freemountain/morph-fs/commit/447573f))
* Add Project.createWriter(). ([914f503](https://github.com/freemountain/morph-fs/commit/914f503))
* Add SourceFile getRelativePathToSourceFile and getRelativePathToSourceFileAsModuleSpecifier. ([99e8585](https://github.com/freemountain/morph-fs/commit/99e8585))
* Add SourceFile.getDirectoryPath(). ([708f3bb](https://github.com/freemountain/morph-fs/commit/708f3bb))
* Add SourceFile.getLanguageVersion(). Language version is now specific to file. ([117433e](https://github.com/freemountain/morph-fs/commit/117433e))
* Add SourceFile.getPreEmitDiagnostics ([d1ea9eb](https://github.com/freemountain/morph-fs/commit/d1ea9eb))
* Add sourceFile.getReferencingLiteralsInOtherSourceFiles(). ([9f009cf](https://github.com/freemountain/morph-fs/commit/9f009cf))
* Add SourceFile.getRelativePathTo and getRelativePathAsModuleSpecifierTo. ([04f91eb](https://github.com/freemountain/morph-fs/commit/04f91eb))
* Add SourceFile.isFromExternalLibrary ([136a2da](https://github.com/freemountain/morph-fs/commit/136a2da))
* Add SourceFile.isInNodeModules() ([0a1817c](https://github.com/freemountain/morph-fs/commit/0a1817c))
* Add space before and after first & last import specifier. ([ae23711](https://github.com/freemountain/morph-fs/commit/ae23711))
* Add StringLiteral.setLiteralValue(...). ([8d5ff33](https://github.com/freemountain/morph-fs/commit/8d5ff33))
* Add support for strict property initialization (exclamation token). ([1e787f2](https://github.com/freemountain/morph-fs/commit/1e787f2))
* Add Symbol.getEscapedName() ([4360bab](https://github.com/freemountain/morph-fs/commit/4360bab))
* Add Symbol.getValueDeclaration() ([91da111](https://github.com/freemountain/morph-fs/commit/91da111))
* Add Symbol#getAliasedSymbolOrThrow() and Symbol#getExportByNameOrThrow(name: string). ([78c7ea3](https://github.com/freemountain/morph-fs/commit/78c7ea3))
* Add ts.Node brand to prevent using ts.Nodes created outside the ts named export. ([ab7c353](https://github.com/freemountain/morph-fs/commit/ab7c353))
* Add Type: isUnionOrIntersection, isClass, and isClassOrInterface. ([12c4710](https://github.com/freemountain/morph-fs/commit/12c4710))
* Add Type.getConstraint() and getDefault(). ([8850266](https://github.com/freemountain/morph-fs/commit/8850266))
* Add Type.getTupleElements(). ([8c5dafc](https://github.com/freemountain/morph-fs/commit/8c5dafc))
* Add type.isEnumLiteralType() and type.isLiteral() ([56b26f8](https://github.com/freemountain/morph-fs/commit/56b26f8)), closes [#290](https://github.com/freemountain/morph-fs/issues/290)
* Add Type.isTypeParameter type guard. ([02c591f](https://github.com/freemountain/morph-fs/commit/02c591f))
* Add Type#isUnknown() ([30bb042](https://github.com/freemountain/morph-fs/commit/30bb042))
* Add TypeParameterDeclaration - getConstraintOrThrow() and getDefaultOrThrow() ([8e8166b](https://github.com/freemountain/morph-fs/commit/8e8166b))
* Add UserPreferences and new organizeImports parameter ([a7864f1](https://github.com/freemountain/morph-fs/commit/a7864f1))
* Add UserPreferences on sourceFile.organizeImports() ([6b0a089](https://github.com/freemountain/morph-fs/commit/6b0a089))
* Add VariableDeclaration#getVariableStatement() ([bba33ee](https://github.com/freemountain/morph-fs/commit/bba33ee))
* Add WriterFunctions - objectType, unionType, intersectionType ([d10877f](https://github.com/freemountain/morph-fs/commit/d10877f))
* addExistingDirectory and addDirectoryExists now has a recursive option. ([45efb2f](https://github.com/freemountain/morph-fs/commit/45efb2f))
* Align ClassDeclaration more with the compiler. ([9b64bb5](https://github.com/freemountain/morph-fs/commit/9b64bb5))
* ArrayLiteralExpression - Add ability to add elements with writer for each element. ([1f8b1cb](https://github.com/freemountain/morph-fs/commit/1f8b1cb))
* Better error message when using a forgotten node. ([762254f](https://github.com/freemountain/morph-fs/commit/762254f))
* BodyableNode - addBody, removeBody, hasBody ([3f4175e](https://github.com/freemountain/morph-fs/commit/3f4175e))
* Deletes do not happen on the file system until `.save()` is called on the main `ast` object. ([d208cfd](https://github.com/freemountain/morph-fs/commit/d208cfd))
* Deprecate renameName on ImportSpecifier and ExportSpecifier. ([f94eed9](https://github.com/freemountain/morph-fs/commit/f94eed9))
* Deprecated node.getStartColumn() and node.getEndColumn(). Renamed sourceFile.getColumnAtPos(pos) to getLengthFromLineStartAtPos(pos). ([d8b61b6](https://github.com/freemountain/morph-fs/commit/d8b61b6))
* Emit a directory. ([3cb455c](https://github.com/freemountain/morph-fs/commit/3cb455c))
* Export errors. ([#402](https://github.com/freemountain/morph-fs/issues/402)) ([b719ed8](https://github.com/freemountain/morph-fs/commit/b719ed8))
* ExportSpecifier - getLocalTargetSymbol() and getLocalTargetDeclarations() ([30eff42](https://github.com/freemountain/morph-fs/commit/30eff42))
* Get exports from symbol. ([c815955](https://github.com/freemountain/morph-fs/commit/c815955))
* Hide "Specific" structures in declaration file. ([db55c33](https://github.com/freemountain/morph-fs/commit/db55c33))
* ImportDeclaration & ExportDeclaration - getModuleSpecifierSourceFile ([a42d6a1](https://github.com/freemountain/morph-fs/commit/a42d6a1))
* ImportDeclaration and ExportDeclaration - isModuleSpecifierRelative() ([2ef3064](https://github.com/freemountain/morph-fs/commit/2ef3064))
* ImportDeclaration.getDefaultImportOrThrow() ([499c741](https://github.com/freemountain/morph-fs/commit/499c741))
* ImportDeclaration.setDefaultImport should remove the default import when providing an empty string. ([f81f90a](https://github.com/freemountain/morph-fs/commit/f81f90a))
* ImportSpecifier and ExportSpecifier - .setAlias(...) does not the usages. ([5f2f7c8](https://github.com/freemountain/morph-fs/commit/5f2f7c8))
* ImportSpecifier and ExportSpecifier - Add .removeAlias(). ([b594113](https://github.com/freemountain/morph-fs/commit/b594113))
* ImportSpecifier and ExportSpecifier - Add removeAliasWithRename() ([576db34](https://github.com/freemountain/morph-fs/commit/576db34))
* ImportSpecifier and ExportSpecifier - Renamed .setAlias to .renameAlias ([0f446b6](https://github.com/freemountain/morph-fs/commit/0f446b6))
* ImportTypeNode - setArgument and setQualifier ([e94bbd4](https://github.com/freemountain/morph-fs/commit/e94bbd4))
* Improve inserting to ArrayLiteralExpressions. ([b2e991f](https://github.com/freemountain/morph-fs/commit/b2e991f))
* Improvements to CompilerNodeToWrappedType. ([384613a](https://github.com/freemountain/morph-fs/commit/384613a))
* InterfaceDeclaration - getBaseTypes() and getBaseDeclarations() ([9785eeb](https://github.com/freemountain/morph-fs/commit/9785eeb))
* Node .getStart & .getStartLinePos - add includeJsDocComment. ([af8bb55](https://github.com/freemountain/morph-fs/commit/af8bb55))
* Node.getStartLineNumber and SourceFile.getLineNumberFromPos. ([64178fa](https://github.com/freemountain/morph-fs/commit/64178fa))
* Node.preprendWhitespace(textOrWriterFunction) and .appendWhitespace(textOrWriterFunction) ([a43cb65](https://github.com/freemountain/morph-fs/commit/a43cb65))
* Program - getSyntacticDiagnostics, getSemanticDiagnostics, getDeclarationDiagnostics, getPreEmitDiagnostics ([56b5f58](https://github.com/freemountain/morph-fs/commit/56b5f58))
* Rename CompilerApiNodeBrandPropertyNamesType to CompilerNodeBrandPropertyNamesType. ([1eb6a86](https://github.com/freemountain/morph-fs/commit/1eb6a86))
* Rename sourceFile.getLineNumberFromPos(pos) to getLineNumberAtPos(pos) ([fa5849a](https://github.com/freemountain/morph-fs/commit/fa5849a))
* Rename VariableDeclarationType to VariableDeclarationKind. ([ce52ce3](https://github.com/freemountain/morph-fs/commit/ce52ce3))
* Renamed getAliasIdentifier() to getAliasNode() on ImportSpecifier and ExportSpecifier. ([e97de72](https://github.com/freemountain/morph-fs/commit/e97de72))
* setModuleSpecifier accepts a source file. ([c2a4d9a](https://github.com/freemountain/morph-fs/commit/c2a4d9a))
* SourceFile - copyImmediately and moveImmediately along with sync methods. ([4183769](https://github.com/freemountain/morph-fs/commit/4183769))
* SourceFile - getExportedDeclarations() ([61663aa](https://github.com/freemountain/morph-fs/commit/61663aa))
* sourceFile.copy() will automatically update the new source file's import & export declarations' module specifiers if necessary. ([e48949e](https://github.com/freemountain/morph-fs/commit/e48949e))
* SourceFile.formatText uses the formatting API. ([02e3feb](https://github.com/freemountain/morph-fs/commit/02e3feb)), closes [#157](https://github.com/freemountain/morph-fs/issues/157) [#158](https://github.com/freemountain/morph-fs/issues/158)
* sourceFile.getBaseNameWithoutExtension() ([09a63d9](https://github.com/freemountain/morph-fs/commit/09a63d9))
* sourceFile.getExtension() ([3906902](https://github.com/freemountain/morph-fs/commit/3906902))
* StatementedNode - getStatement(condition) and getStatementByKind(kind). ([db34a13](https://github.com/freemountain/morph-fs/commit/db34a13)), closes [#233](https://github.com/freemountain/morph-fs/issues/233)
* Support deleting a file from the file system. ([326b6e0](https://github.com/freemountain/morph-fs/commit/326b6e0))
* Support multiple globs when getting source files. ([bb935d9](https://github.com/freemountain/morph-fs/commit/bb935d9))
* Support TS 2.4, 2.5, and 2.6 ([57c87f8](https://github.com/freemountain/morph-fs/commit/57c87f8))
* Support TS 3.2. ([e800f8b](https://github.com/freemountain/morph-fs/commit/e800f8b))
* Support TypeScript 3.1.1 and 3.1.3. ([1598b96](https://github.com/freemountain/morph-fs/commit/1598b96))
* Symbol - Add .getMembers(), .getMemberByName(name), and .getMemberByNameOrThrow(name). ([6fb28b4](https://github.com/freemountain/morph-fs/commit/6fb28b4))
* TextInsertableNode - Add removeText() overload with no parameters. ([a4b5ef1](https://github.com/freemountain/morph-fs/commit/a4b5ef1))
* TypeGuards.hasBody(node). ([4041dfd](https://github.com/freemountain/morph-fs/commit/4041dfd))
* TypeGuards.hasName(node) ([efed188](https://github.com/freemountain/morph-fs/commit/efed188))
* TypeParameterDeclaration - Add .removeDefault() and .removeConstraint() ([7a9d329](https://github.com/freemountain/morph-fs/commit/7a9d329))
* TypeParameterDeclaration - Add .setDefault(text) and .setConstraint(text) ([de9d91b](https://github.com/freemountain/morph-fs/commit/de9d91b))
* Update code-block-writer version. Adds .tab(), .tabIfLastNot(), and .isLastTab(). ([903b8ac](https://github.com/freemountain/morph-fs/commit/903b8ac))
* Update to TypeScript 2.9. ([da45aae](https://github.com/freemountain/morph-fs/commit/da45aae))
* Upgrade from TypeScript 2.8.1 to 2.8.3. ([106e17e](https://github.com/freemountain/morph-fs/commit/106e17e))
* Upgrade support to TypeScript 2.7. ([dab428a](https://github.com/freemountain/morph-fs/commit/dab428a))
* Upgrade to code-block-writer 6.2.0 ([155f935](https://github.com/freemountain/morph-fs/commit/155f935))
* Upgrade to code-block-writer 6.6.0 ([34c39a9](https://github.com/freemountain/morph-fs/commit/34c39a9))
* Upgrade to TypeScript 3.0.3. ([c38f5c2](https://github.com/freemountain/morph-fs/commit/c38f5c2))
* **Node:** Getting child of node at index. ([cb0a800](https://github.com/freemountain/morph-fs/commit/cb0a800))
* Use readonly arrays for file globs ([#401](https://github.com/freemountain/morph-fs/issues/401)) ([c96d987](https://github.com/freemountain/morph-fs/commit/c96d987))
* Uses the language service to figure out the indentation level when writing. ([76f9531](https://github.com/freemountain/morph-fs/commit/76f9531))
* Wrap JSDocFunctionType. ([8965da3](https://github.com/freemountain/morph-fs/commit/8965da3))
* Wrap LanguageService.getEmitOutput(...). ([40ecc32](https://github.com/freemountain/morph-fs/commit/40ecc32))
* Wrap ModuleBlock. ([1507c8d](https://github.com/freemountain/morph-fs/commit/1507c8d))
* Wrap more type nodes. ([9211350](https://github.com/freemountain/morph-fs/commit/9211350))
* Wrap NamedImports and NamedExports. ([6a17fe8](https://github.com/freemountain/morph-fs/commit/6a17fe8))


### Performance Improvements

* [#283](https://github.com/freemountain/morph-fs/issues/283) - Do not temporarily wrap new tree when doing a manipulation. ([824819f](https://github.com/freemountain/morph-fs/commit/824819f))
* [#393](https://github.com/freemountain/morph-fs/issues/393) - Use DocumentRegistry when creating language service. ([d879071](https://github.com/freemountain/morph-fs/commit/d879071))
* [#435](https://github.com/freemountain/morph-fs/issues/435) - Memoize only before source file manipulation for some wrapped language service source file dependent objects. ([ad06259](https://github.com/freemountain/morph-fs/commit/ad06259))
* [#498](https://github.com/freemountain/morph-fs/issues/498) - OfKind and ByKind methods should use ts.forEachChild when appropriate. ([5c249bf](https://github.com/freemountain/morph-fs/commit/5c249bf))
* Don't internally add nodes to the cache so often for common navigation methods. ([7efc147](https://github.com/freemountain/morph-fs/commit/7efc147))
* Make internal Es5HashSet O(1) instead of O(n) for lookups. ([a12a92c](https://github.com/freemountain/morph-fs/commit/a12a92c))
* Reuse the old program when creating a new one. ([6dc60f8](https://github.com/freemountain/morph-fs/commit/6dc60f8))


### BREAKING CHANGES

* Source files implicitly resolved in the node_modules directory are no longer returned by `Project#getSourcesFiles()` and `getDirectories()`. Either add them to the project explicitly or navigate to them via methods like `.getSourceFile("node_modules/library/pathToFile.d.ts")` or `.getDirectory("node_modules")`.
* QuestionTokenableNode.setIsOptional is now setHasQuestionToken.
* `node.getFirstChildByKind` and `node.getChildrenOfKind` now search the parsed tree via `.forEachChild(...)` when specifying a parsed node's syntax kind. Previously it would only search the results of `node.getChildren()`.
* `JSDocTag.getAtToken()` was removed because `jsDocTag.atToken` no longer exists in ts 3.2.
* The `Options` interface was renamed to `ProjectOptions`. This was so it's less ambiguous.
* The Project constructor changed to accept a file system host on the first options object parameter rather than as its own parameter.
* Referenced source files in module specifiers and references are now added to the project when constructing a project and providing a tsconfig. To revert back to the old behaviour, provide the `skipFileDependencyResolution` option and set it to true.
* `JSDocTag`'s `.getName()` is now `.getTagName()`. This was necessary because `.getName()` should return a `JSDocPropertyLikeTag`'s name.
* Removed CompilerNodeBrandPropertyNamesType.
* More declarations are being written with hanging indents.
* Upgraded to TS 3.0.3, which has some breaking changes in it from 3.0.1.
* IndexSignatureDeclaration's return type is now nullable to reflect what's done in the compiler API.
* The "XExtensionType" type aliases are now internal. They were hidden because they're not useful outside the library and only create noise in the named exports.
* `NamespaceDeclaration.setHasNamespaceKeyword` and `setHasModuleKeyword` are now `setDeclarationKind(kind: NamespaceDeclarationKind)`. `NamespaceDeclarationStructure.hasModuleKeyword` and `hasNamespaceKeyword` are now `declarationKind`.
* Some properties on thrown errors were removed. See commit for details.
* TypeParameterDeclaration's getConstraintNode() and getDefaultNode() are deprecated. Use getConstraint() and getDefault().
* JsxTagNamedNode.getTagName() is now .getTagNameNode()
* ImportDeclaration.setDefaultImport no longer renames the identifier. Use `.renameDefaultImport` instead.
* .setAlias(...) does not rename the usages.
* .setAlias(...) is now .renameAlias(...).
* `.fill(...)` is now `.set(...)` and will replace existing nodes.

If you want the old behaviour, use the `.addX` methods or provide the structures of the nodes by using `.getStructure()` (Ex. `functionDeclaration.fill({ parameters: [...functionDeclaration.getParameters().map(p => p.getStructure()), { name: "myParam" }] });`)
* "Specific" structures are no longer exported from the declaration file.

This helps reduce the noise when looking at code completion for a named export from the library.
* Change to jsx spread attribute structure.

Co-authored-by: Sebastián Gurin <sebastigurin@gmail.com>
Co-authored-by: David Sherret <dsherret@users.noreply.github.com>
* `project/sourceFile.getDiagnostics()` and `program.getPreEmitDiagnostics()` no longer exist. Use `project/sourceFile.getPreEmitDiagnostics()`.
* Removed ability to set a specific target for specific source files (all files are stored in a ts.DocumentRegistry now so that's not possible).
* `BindingNamedNode` now correctly may also return a `BindingName`.
* getImplementations()[i].getNode() now returns the identifier instead of the parent node. This was based on a change in the compiler api.
* Renamed sourceFile.getLineNumberFromPos(pos) to getLineNumberAtPos(pos) for consistency.
* node.getStartColumn() and node.getEndColumn() was removed. Renamed sourceFile.getColumnAtPos(pos) to getLengthFromLineStartAtPos(pos) for correctness.
* getAliasIdentifier() on ImportSpecifier and ExportSpecifier is now getAliasNode() for consistency.
* renameName on ImportSpecifier and ExportSpecifier is now deprecated. Use `importSpecifier.getNameNode().rename(newName)`.
* CompilerApiNodeBrandPropertyNamesType is now CompilerNodeBrandPropertyNamesType for consistency.
* FunctionDeclaration now has an optional name to support cases where it does (ex. `export default function() {}`)
* `getNodeProperty` functionality requires TS 2.8 or greater due to mapped types.
* DefinitionInfo.getNode() is now DefinitionInfo.getDeclarationNode() for compatibility with DocumentSpan.
* getReferencingNodes and getDefinitionReferencingNodes are both renamed to .findReferencesAsNodes(). This is so the method is more discoverable in auto complete when looking at .findReferences().
* Renamed all Type.isXType() methods to Type.isX() to match what's done in the compiler api and to remove needless repetition in name.
* Updating to TypeScript 2.9 introduces some changes in behaviour and breaking changes in the compiler API declaration file.
* ClassDeclarationStructure.ctor is renamed ctors. It accepts multiple constructors now. Additionally, insertConstructor and addConstructor on ClassDeclaration does not remove the existing constructor if it exists.
* code-block-writer is now exported as a named export from the library (`CodeBlockWriter`).
* Implicitly resolved files and directories are no longer returned when calling `project.getSourceFiles()` or `project.getDirectories()`. They can be added by calling `project.addExistingSourceFiles(...)`-like methods or `project.addExistingDirectory(...)`. These source files and directories are still accessible when specifying their path though (ex. `project.getSourceFile("node_modules/typescript/lib/typescript.d.ts")`)
* AddDirectoryOptions -> DirectoryAddOptions
* CreateSourceFileOptions -> SourceFileCreateOptions, AddSourceFileOptions -> SourceFileAddOptions
* The FileSystemHost interface now has move and copy methods.
* createDirectory will not throw if the directory exists.
* Directory.remove() is now Directory.forget() for consistency with SourceFile.
* SourceFile.getRelativePathToSourceFile and getRelativePathToSourceFileAsModuleSpecifier is now getRelativePathTo and getRelativePathAsModuleSpecifierTo respectively.
* ExportAssignmentStructure.isEqualsExport is now isExportEquals. This was incorrectly named.
* Identifier.getDefinitionReferencingNodes() is now getReferencingNodes().
* Directory.copy correctly does not update module specifiers pointing to other files in the directory being copied.
* addDirectoryIfExists is now addExistingDirectoryIfExists for consistency with addExistingDirectory.
* `.getName()` and `.getNameNode()` on ClassDeclaration can now possibly return undefined (ex. `export default class { ... }`).
* VariableDeclarationType is now VariableDeclarationKind. .getDeclarationType() is now .getDeclarationKind()

This was done to reduce confusion with the word "Type".
* QuoteType is now QuoteKind.

This was done to make it consistent with NewLineKind.
* ScriptTarget was moved from manipulation settings to be stored exclusively in the compiler options.
* `getReferencingImportAndExportDeclarations()` was removed. Use `getReferencingNodesInOtherSourceFiles()`.
* `ImportDeclaration` & `ExportDeclaration` `.getModuleSpecifier()` now returns the StringLiteral. Use `.getModuleSpecifierValue()` for the previous behaviour.
* Project & Directory's addSourceFileIfExists is now addExistingSourceFileIfExists.

This was done for consistency with addExistingSourceFile.
* Requesting an ancestor directory will no longer return undefined if it is an ancestor of a "root" directory.
* Removed Symbol.equals(symbol). You can use === to compare symbols now.
* ClassDeclaration.getMembers() no longer returns parameter properties.
* * ast.saveUnsavedSourceFiles() is now ast.save()
* Directory.saveUnsavedSourceFiles() is now Directory.save()
* **file-system:** SourceFile/Directory: delete() and deleteSync() are now deleteImmediately() and deleteImmediatelySync().
* HeritageClause getTypes() renamed to getTypeNodes().

It was incorrectly named originally.
* ClassDeclaration & InterfaceDeclaration getAllMembers() renamed to getMembers().
* sourceFile.getImport is now getImportDeclaration for consistency.
* Access the TypeScript compiler via `import {ts} from "ts-simple-ast";`
* NewLineKind is now the TypeScript compiler's enum.
* toggleDeclareKeyword is now setHasDeclareKeyword.
* Use an array when passing in multiple file globs to ast.addExistingSourceFiles.

This better expresses the intent of this method call.
* Files are added based on the tsconfig by default. `getCompilerOptionsFromTsConfig` now returns an object that includes the diagnostics.
* All import methods on SourceFile have been renamed to include "declaration" (ex. getImports() -> getImportDeclarations()). This was done for consistency with getExports() -> getExportDeclarations().
* getDocs(), insertDoc(), etc. have been renamed to getJsDocs(), insertJsDoc(), etc...
* All export methods on SourceFile have been renamed to include "declaration" (ex. getExports() -> getExportDeclarations())
* Renamed methods for creating & adding source files. See #170 for details.
* Removed DocumentationableNode.getDocumentationComment.
* getDocumentationCommentNodes is now getDocNodes.
* createWrappedNode's signature changed.
* StringChar renamed to QuoteType. Manipulation setting's getStringChar() renamed to getQuoteType().

This was done for consistency.
* SourceFile.formatText now takes a FormatCodeSettings argument.
* Updated to code-block-writer 7.0.0. The writer methods `newLineIfLastNotNewLine`, `blankLineIfLastNotBlankLine`, and `spaceIfLastNotSpace`, are removed. Use the shorter method names like `spaceIfLastNot`.
