const fs = require("fs");

// fs.writeFile('fileModule/read.txt',"Kaise he ho", function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Data written successfully!");
// })

// fs.appendFile("fileModule/read.txt", " Kya Haal Chal ", function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Data written successfully!");
// });

// fs.rename("fileModule/read.txt", "write.txt",(err)=>{
//   console.log("File Renamed")
//   console.log(err+"error code: " )
// })

// fs.copyFile("write.txt","fileModule/write.txt",(err)=>{
//   if(err) console.error(err)
//   else console.log("Done this")
// })
 
// fs.unlink("ronak.txt",(err)=>{
//   if(err) return console.error(err)
//   else console.log("Done")
// })

// fs.rmdir("copy1",{recursive:true},(err)=>{
//   if(err) return console.error(err)
//   else console.log("Done")
// })

// fs.mkdir("copy",(err)=>{
//   if(err) return console.error(err)
//   else console.log("Done")
// })

// fs.readFile("copy/read.txt","utf-8",(err,data)=>{
//   if(err) return console.error(err)
//   else console.log( data)
// })

// fs.rmdir("copy",{recursive:true},(err)=>{
//   if(err) return console.error(err)
//   else console.log("Done")
// })

fs.mkdir("HttpModule",{recursive:true},(err)=>{
  if(err) return console.error(err)
  else console.log("Done")
})