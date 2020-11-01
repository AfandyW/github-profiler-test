

const https = require('https')

let options = {
    'hostname': 'ai.github.com',
    'port': 443,
    'path': '/users/yofri',
    'method': 'GET',
    'headers': {
        'user-agent': 'nodejs'
    }
}

let request = https.request(options, (result)=>{
    console.log('Got response: ', result.statusCode)
})

request.end()

// request.on('error', (e) => {
//     console.error(e)
// })



