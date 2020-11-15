const express = require("express")
const router = express.Router()
const controller = require("../Controller/images.controller")


router.post("/", controller.top8)

module.exports = app => app.use("/images", router)