const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/entryFile.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'outputFile.js',
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



