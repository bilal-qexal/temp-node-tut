const {readFileSync,writeFileSync}=require('fs');

//same
// const fs=require('fs');
// fs.readFileSync, fs.writeFileSync

let first= readFileSync('./uploads/subfolder/first.txt','utf8');
let second= readFileSync('./uploads/subfolder/second.txt','utf8');
console.log(first);
console.log(second);
writeFileSync('./uploads/subfolder/result.txt',  `Result from both files are: ${first} ${second}`,{flag:'a'})
