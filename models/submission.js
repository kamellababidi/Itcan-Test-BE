const sequelize = require('../config/db');
const Sequelize = require('sequelize');

const Submission = sequelize.define(
  'submission',
  {
    // attributes
    fullName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nationality: {
      type: Sequelize.STRING,
      allowNull: false
    },
    martialStatus: {
      type: Sequelize.STRING,
      allowNull: false
    },
    major: {
      type: Sequelize.STRING,
      allowNull: false
    },
    degree: {
      type: Sequelize.STRING,
      allowNull: false
    },
    university: {
      type: Sequelize.STRING,
      allowNull: false
    },
    yearsOfExperience: {
      type: Sequelize.STRING,
      allowNull: false
    },
    employmentStatus: {
      type: Sequelize.STRING,
      allowNull: false
    },
    expectedSalary: {
      type: Sequelize.STRING,
      allowNull: false
    },
    contactNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    visaStatus: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
  },
  {}
);

Submission.sync();


module.exports = Submission;
