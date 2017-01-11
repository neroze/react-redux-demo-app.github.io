module.exports = {
     entry: './src/index.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js',
     },
    debug: true,
    devtool: 'source-map',
    module: {
         loaders: [
                      {
                        test: /.jsx?$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                          presets: ['es2015', 'react']
                        }
                      }
                    ]
     }
 }