module.exports = app => {
    const professors = require("../controllers/professor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", professors.create);
  
    // Retrieve all Tutorials
    router.get("/", professors.findAll);

  
    // Retrieve a single Tutorial with id
    router.get("/:id", professors.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", professors.update);
  
    // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/professors', router);
  };