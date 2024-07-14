const{readFile,writeFile}=require('fs')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
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
            console.log(data);
        })
    })
})