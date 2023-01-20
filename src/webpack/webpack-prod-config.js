import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class WebpackProdConfig {
    /** @param {string} entryJsFilePath The main javascript entry file
     * @param {string} entryHtmlFilePath The main html entry file
     * @param {string} outputDirPath
     * @param {string} outputFileName
     * @returns {Object} */
    static config = (entryJsFilePath, entryHtmlFilePath, outputDirPath, outputFileName) => {
        return {
            entry: entryJsFilePath,
            plugins: [
                new HtmlWebpackPlugin({template: entryHtmlFilePath})
            ],
            output: {
                path: path.resolve(__dirname, outputDirPath),
                filename: outputFileName,
            },
        }
    }
}

export {WebpackProdConfig}
