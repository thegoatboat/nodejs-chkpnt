const fs=require('fs')

fs.rename('welcome.txt',"Hello.txt",err=>{
    err?console.log(err):console.log("renamed succefuly")
})
