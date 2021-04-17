const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!
const actionRouter = require("./actions/actions-router")
const projectRouter = require("./projects/projects-router")

server.use(actionRouter)
server.use(projectRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong, please try again later",
    })
})

module.exports = server;
