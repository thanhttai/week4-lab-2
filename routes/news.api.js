const express = require('express')
const router = express.Router()

router.get("/news", function (req, res, next) {
    res.send(`Sucessfully get detail of news`)
})

router.post("/news", function (req, res, next) {
    res.send(`Sucessfully post detail of news`)
})
router.put("/news/:id", function (req, res, next) {
    res.send(`Sucessfully update detail of news`)
})
router.delete("/news/:id", function (req, res, next) {
    res.send(`Sucessfully delete detail of news`)
})
module.exports = router;