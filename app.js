const http=require('http');
const myName='Mohit kr'

const server=http.createServer((req,res)=>{
    console.log(`Hello!, ${myName}`)
})

server.listen(4000);