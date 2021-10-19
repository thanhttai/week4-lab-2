const express = require('express')
const router = express.Router()

router.get("/author", function (req, res, next) {
    res.send(`Sucessfully get detail of author`)
})

router.post("/author", function (req, res, next) {
    res.send(`Sucessfully post detail of author`)
})
router.put("/author/:id", function (req, res, next) {
    res.send(`Sucessfully update detail of author`)
})
router.delete("/author/:id", function (req, res, next) {
    res.send(`Sucessfully delete detail of author`)
})
module.exports = router;