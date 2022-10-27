const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-Type": "application/json"
    })
    res.end(
        JSON.stringify({
            "slackUsername":"Tamynator",
            "backend": true,
            "age": 20,
            "bio": "i am a tech entusiast with knowledge in dart(flutter), javascript and some webtechnology. I a recently started node and i'm happy to join like mind in this hng internship to futher my knowledge in backend using node"
        })
    )
})
server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
