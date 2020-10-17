// Import dependencies
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// Initializing express lib
const server = express();

server
  // Use body from req
  .use(express.urlencoded({ extended: true }))

  // Using static files
  .use(express.static("public"))

  // Config template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // App routes
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// Start server
server.listen(5500);
