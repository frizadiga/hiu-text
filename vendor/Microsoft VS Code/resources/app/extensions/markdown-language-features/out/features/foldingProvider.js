"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const tableOfContentsProvider_1 = require("../tableOfContentsProvider");
const rangeLimit = 5000;
class MarkdownFoldingProvider {
    constructor(engine) {
        this.engine = engine;
    }
    async provideFoldingRanges(document, _, _token) {
        const tocProvider = new tableOfContentsProvider_1.TableOfContentsProvider(this.engine, document);
        let toc = await tocProvider.getToc();
        if (toc.length > rangeLimit) {
            toc = toc.slice(0, rangeLimit);
        }
        const foldingRanges = toc.map((entry, startIndex) => {
            const start = entry.line;
            let end = undefined;
            for (let i = startIndex + 1; i < toc.length; ++i) {
                if (toc[i].level <= entry.level) {
                    end = toc[i].line - 1;
                    if (document.lineAt(end).isEmptyOrWhitespace && end >= start + 1) {
                        end = end - 1;
                    }
                    break;
                }
            }
            return new vscode.FoldingRange(start, typeof end === 'number' ? end : document.lineCount - 1);
        });
        return foldingRanges;
    }
}
exports.default = MarkdownFoldingProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d0182c3417d225529c6d5ad24b7572815d0de9ac/extensions\markdown-language-features\out/features\foldingProvider.js.map
