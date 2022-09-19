const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/entryFile.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'outputFile.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 4500,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};



