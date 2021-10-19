const express = require('express')
const router = express.Router()

router.get("/movie", function (req, res, next) {
    res.send(`Sucessfully get detail of movie`)
})

router.post("/movie", function (req, res, next) {
    res.send(`Sucessfully post detail of movie`)
})
router.put("/movie/:id", function (req, res, next) {
    res.send(`Sucessfully update detail of movie`)
})
router.delete("/movie/:id", function (req, res, next) {
    res.send(`Sucessfully delete detail of movie`)
})
module.exports = router;