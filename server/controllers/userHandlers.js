const getUserHandler = (req, res) => {
    res.json({
        "message": "Hello this is you user 1",
        "status": 200
    })
}

module.exports = {
    getUserHandler
}