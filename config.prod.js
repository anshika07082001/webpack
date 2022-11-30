const path=require('path')
 
module.exports={
   mode:"production",
   entry:path.resolve(__dirname, './src/index.js'),
   output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'main.js'
   },
   //loader
   module:{
    rules:[{test:/\.css$/,use:['style-loader','css-loader']}]
   },
}