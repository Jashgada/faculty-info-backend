
const mongoose = require('mongoose')
const { Schema } = mongoose;

module.exports = mongoose => {
    const Degree = new Schema({
        "degreeLevel": String,
        "major": String,
        "year": Number,
        "university":String
    });
    
    const AcademicExperience = new Schema({
        "position": String,
        "department": String,
        "university": String,
        "yearRange": String,
    });
    const NonAcademicExperience = new Schema({
        "position": String,
        "company": String,
        "yearRange": String,
    });
    
    const CertsAndProfessionalRegistration = new Schema({
        "certification": String
    });
    
    const Membership = new Schema({
        "organization": String
    });
    
    const Honor = new Schema({
        "honor": String,
        "year": Number
    });
    
    const Publication = new Schema({
        "publication": String
    });
    
    const ProfessionalDevelopment = new Schema({
        "activity": String
    });
    const Professor = mongoose.model(
      "professor",
      mongoose.Schema(
        {
            name: String,
            title: String,
            tenuredStatus: Boolean,
            degrees:[Degree],
            academicExperiences:[AcademicExperience],
            nonAcademicExperiences:[NonAcademicExperience],
            certsAndProfessionalRegistrations:[CertsAndProfessionalRegistration],
            memberships:[Membership],
            honors:[Honor],
            publications:[Publication],
            professionalDevelopments:[ProfessionalDevelopment]


        },
        { timestamps: true }
      )
    );
  
    return Professor;
  };