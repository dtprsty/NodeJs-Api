// module
const express = require('express');
const router = express.Router();

// routes
router.get('/', function(req, res) {
    res.json({
        "message": "NodeJs API for Relauan"
    });
    res.status(200);
});

// exports index to app
module.exports = router;