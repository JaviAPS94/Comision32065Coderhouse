const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production', //modo trabajo desarrollo o production
    entry: './src/index.ts', //el archivo de entrada de nuestro código
    target: 'node', 
    externals: [nodeExternals()], // permite el correcto funcionamiento con lagunas librerías externas (express)
    output: { //punto de salida
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: { //configura como se resuelven los módulos
        extensions: ['.ts', '.js'],
    },
    module: { //sierve para aclararle a Webpack como debe procesar los loaders que queramos usar para un proyecto.
        rules: [
            {
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    }
};