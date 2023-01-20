import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

class WebpackDevConfig {
    /** @param {string} entryJsFilePath The main javascript entry file
     * @param {string} entryHtmlFilePath The main html entry file
     * @returns {Object} */
    static config = (entryJsFilePath, entryHtmlFilePath) => {
        return {
            entry: entryJsFilePath,
            mode: 'development',
            plugins: [
                new HtmlWebpackPlugin({template: entryHtmlFilePath})
            ]
        }
    }
}

export {WebpackDevConfig}
