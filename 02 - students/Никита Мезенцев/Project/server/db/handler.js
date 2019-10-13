const fs = require('fs')
const path = require('path')

module.exports = {
    read: function(name) {
        return new Promise( (resolve, reject) => {
            fs.readFile(path.resolve(__dirname, name), {encoding: 'utf-8'}, (err, file) => {
                if (err) {
                    console.error("error", err)
                    reject(err)
                } else {
                    let obj = null
                    try {
                        obj = JSON.parse(file)
                        resolve(obj)
                    } catch (e) {
                        console.error('fail', e)
                        reject(e)
                    }
                }
            })
        })
    },
    write: function(name, data) {
        return new Promise( (resolve, reject) => {
            fs.writeFile(path.resolve(__dirname, name), JSON.stringify(data, null, '\t'), {encoding: 'utf-8'}, (err) => {
                if (err) {
                    console.error("error", err)
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}
