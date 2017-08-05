module.exports = {
  entry: './app/index.js',
  output: {
  	path:'./dist',
    filename: 'bundle.js'
  },
module.exports= {
    entry: './app/index.js',
    output: {
        path:'./dist',
        filename: 'bundle.js'
    }
     module: {
        loaders: [
            {
                {test: /\.css$/, loader:"style-loader", "css-loader"}

            }
};
module.exports = {
  module: {
    rules: [
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  }
}