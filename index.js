const https = require('https')

let username = 'Afandy'

// [x] connect to github API
let options = {
    'hostname': 'api.github.com',
    'port': 443,
    'path': `/users/${username}`,
    'method': 'GET',
    'headers': {
        'user-agent': 'nodejs'
    }
}
// [x] Read the data
let request = https.request(options, (res)=>{
    if (res.statusCode === 200){
        let body = ''
        res.on('data',(data) => {
            body = body + data
        })
        // [x] TODO: Parse the data
        res.on('end', ()=>{
            let data = JSON.parse(body)
            console.log(data)
        })
    }else{
        console.log(`
        Username ${username} Not Found
        Error Code: , ${res.statusCode}`)
    }
})

request.end()
request.on('error', (e) => {
    console.error(e)
})





