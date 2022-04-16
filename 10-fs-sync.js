const {readFileSync, writeFileSync} = require('fs')
console.log('Starting the task')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt', `Here is the result file: ${first},${second}`,{ flag: 'a'}
)
console.log('Done with the task')
console.log('starting the new one')

