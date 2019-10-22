const moment = require('moment')
const fs = require('fs')

const logger = (name, action) => {
    const file = 'dist/server/stats.json'
    fs.readFile (file, 'utf-8', (err, data) => {
        if (err) {
            console.log('logger breakdown :(')
        } else {
            let stats = JSON.parse(data)
            stats.push({
                time: moment().format('DD MMM YYYY, h:mm:ss a'),
                product: name,
                action: action
            })
            fs.writeFile(file, JSON.stringify(stats, null, 4), (err) => {
                if (err) {
                    console.log('error writing log file')
                }
            })
        }
    })
}

module.exports = logger