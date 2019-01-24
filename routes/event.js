// module
const express = require('express');
const router = express.Router();

// Get all events
router.get('/events', function(req, res) {
    res.json({
       "status": "OK",
        "results": [{
            "data": "List all events"
        }],
        "error": null
    });
    res.status(200);
});

// exports events to app
module.exports = router;