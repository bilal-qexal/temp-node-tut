const {readFile,write, writeFile}=require('fs');
console.log("start");
readFile('./uploads/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log("error->",err);
        return
    }
    const first=result;
    readFile('./uploads/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log("error-->",err);
            return
        }
        const second=result;
        writeFile('./uploads/subfolder/result.txt',`Here the result from both files: ${first} ${second}`,(err,result)=>{
            if(err){
                console.log("error--->",err);
                return
            }
            console.log(result);
        })
    })
    console.log("done");
   
})
console.log("start another task");
// let first= readFile('./uploads/subfolder/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log("error->",err);
//         return
//     }
//     console.log(result);
//     return result;
// })
// console.log("Result--->",first)