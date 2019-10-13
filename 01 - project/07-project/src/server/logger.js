const moment = require ('moment')
const fs = require ('fs')

const logger = (name, action) => {
    fs.readFile ('./server/stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.log (err)
        } else {
            let stats = JSON.parse (data)
            stats.push ({
                time: moment ().format ('DD MMM YYYY, h:mm:ss a'),
                product: name,
                action: action
            })
            fs.writeFile ('./server/stats.json', JSON.stringify(stats), (err) => {
                if (err) {
                    console.log ('error')
                } 
            })
        }
    })
}

module.exports = logger