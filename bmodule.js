const os=require('os')
const user=os.userInfo()
console.log(user)
console.log(`hello time is ${os.uptime()}`)
const free={
    name:os.type(),
    version:os.version(),
    freemem:os.freemem(),
    totmem:os.totalmem()

}
console.log(free)