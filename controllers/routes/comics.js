const comicsController = require("../comics")

const router = require("express").Router()

router.get("/todo", comicsController.getComics)

module.exports = comicsRouter
