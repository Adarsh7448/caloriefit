const fs = require('fs')

function logger(filename){
    return (req, res, next) => {
        fs.appendFile(
            filename, 
            `${Date.now()}: ${req.path} ${req.method} ${req.ip}\n`,
            (err, data) => {
                next()
            })
    } 
}

module.exports = {
    logger
}