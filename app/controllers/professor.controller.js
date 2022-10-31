const db = require("../models");
const Professor = db.professors;

// Create and Save a new Professor
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Professor
    const professor = new Professor({
      name:  req.body.name,
      title: req.body.title,
      tenuredStatus: req.body.tenuredStatus? req.body.tenuredStatus : false,
      degrees: req.body.degrees,
      academicExperiences: req.body.academicExperiences,
      nonAcademicExperiences: req.body.nonAcademicExperiences,
      certsAndProfessionalRegistrations: req.body.certsAndProfessionalRegistrations,
      memberships: req.body.memberships,
      honors: req.body.honors,
      publications: req.body.publications,
      professionalDevelopments: req.body.professionalDevelopments
    });
  
    // Save Tutorial in the database
    professor
      .save(professor)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Professor."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Professor.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Professors."
        });
      });
  };


  exports.findById2 = (req,res) =>{
    const id = req.params.id;
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

    Professor.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  }

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Professor.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Professor with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Professor with id=" + id });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Professor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Professor with id=${id}. Maybe Professor was not found!`
          });
        } else res.send({ message: "Professsor was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Professor with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};