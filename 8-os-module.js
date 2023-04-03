const os =require('os');
const curentOS={
    user:os.userInfo(),
    name:os.type(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    release:os.release()
}
console.log(curentOS);