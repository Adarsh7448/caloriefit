const getAdminDashboard = (req, res) => {
    res.json({
        "message": "Welcome admin",
        "status": 200
    })
}


const getUserDashboard = (req, res) => {
     res.json({
        "message": "Welcome user",
        "status": 200
    })
}

module.exports = {
    getAdminDashboard,
    getUserDashboard
}