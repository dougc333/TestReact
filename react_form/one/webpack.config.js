module.exports={
  mode: "production",
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  entry:'./index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        use:['babel-loader']
      }
    ]
  }  
}
