const { readFileSync , writeFileSync }=require('fs')
console.log('starting')
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second)
writeFileSync(
    './content/result.txt',`hello sir ${first}`,{flag:'a'}
)
console.log('done with this task')
console.log('starting with next task')