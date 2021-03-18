

module.exports={
  entry:{
    main:"./src/index.js"
  },
  module:{
    rules:[
   {
     test: /\.(js|jsx)$/,
     exclude: /node_modules/,
     use: ['babel-loader'],
   }
  ]
  },
  resolve:{
    extensions:['.js','.jsx']
  }



}
