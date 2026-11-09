const express = require('express');
var router = express.Router()

router.get('/users',async (req, res) => {
    res.json({"Message":"User Added SuccessFully"});
})

module.exports = router