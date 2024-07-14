const{readFile,writeFile}=require('fs')
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log('hello')
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return
        }
        const second=result
        writeFile('./content/result-async.txt',`heelo ${first},${second}`,(err,data)=>
        {
            if(err){

            
                console.log(err)
            }
            console.log('done with this task')
        })
    })
})
console.log('starting with this task')