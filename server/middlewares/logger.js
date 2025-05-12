const fs = require('fs');
const dayjs = require('dayjs');

function logger(filename) {
    return (req, res, next) => {
        const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');
        const logEntry = `${timestamp}: ${req.method} ${req.path} ${req.ip}\n`;

        fs.appendFile(filename, logEntry, (err) => {
            if (err) console.error('Logging failed:', err);
            next();
        });
    };
}

module.exports = {
    logger
}