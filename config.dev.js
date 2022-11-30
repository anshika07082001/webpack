const path=require('path')
 
module.exports={
   mode:"production",
   entry:path.resolve(__dirname, './src/index.js'),
  
   //loader
   module:{
    rules:[{test:/\.css$/,use:['style-loader','css-loader']}]
   },
   //loader
   devServer:{
    open:path.join(__dirname,'dist'),
    compress:true,
    port:5000
   }
}