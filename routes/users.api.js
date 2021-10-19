const express = require('express')
const router = express.Router()

router.get("/users", function (req, res, next) {
    res.send(`Sucessfully get detail of users`)
})

router.post("/users", function (req, res, next) {
    res.send(`Sucessfully post detail of users`)
})
router.put("/users/:id", function (req, res, next) {
    res.send(`Sucessfully update detail of users`)
})
router.delete("/users/:id", function (req, res, next) {
    res.send(`Sucessfully delete detail of users`)
})
module.exports = router;