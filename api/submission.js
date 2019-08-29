const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const i18n = require("i18n");
const handleSqualizerErrors = require('../errors/errors')
const Submission = require('../models/submission');

// @route   post api/submission
// @desc    add submission
// @access  public

router.post(
    '/',
    [
        check('fullName', i18n.__('%s is required', 'name'))
            .not()
            .isEmpty(),
        check('gender', i18n.__('%s is required', 'gender'))
            .not()
            .isEmpty(),
        check('dob', i18n.__('%s is required', 'dob'))
            .not()
            .isEmpty(),
        check('city', i18n.__('%s is required', 'city'))
            .not()
            .isEmpty(),
        check('nationality', i18n.__('%s is required', 'nationality'))
            .not()
            .isEmpty(),
        check('martialStatus', i18n.__('%s is required', 'martialStatus'))
            .not()
            .isEmpty(),
        check('major', i18n.__('%s is required', 'major'))
            .not()
            .isEmpty(),
        check('degree', i18n.__('%s is required', 'degree'))
            .not()
            .isEmpty(),
        check('yearsOfExperience', i18n.__('%s is required', 'yearsOfExperience'))
            .not()
            .isEmpty(),
        check('university', i18n.__('%s is required', 'university'))
            .not()
            .isEmpty(),
        check('employmentStatus', i18n.__('%s is required', 'employmentStatus'))
            .not()
            .isEmpty(),
        check('contactNumber', i18n.__('%s is required', 'contactNumber'))
            .not()
            .isEmpty(),
        check('expectedSalary', i18n.__('%s is required', 'expectedSalary'))
            .not()
            .isEmpty(),
        check('email', i18n.__('%s is required', 'email'))
            .not()
            .isEmpty(),
        check('visaStatus', i18n.__('%s is required', 'visaStatus'))
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { fullName, gender, dob, city, nationality, martialStatus, major, degree, university, employmentStatus, contactNumber,  expectedSalary, email, visaStatus, yearsOfExperience } = req.body;
      
      try {
  
        let submission = new Submission({
            fullName,
            gender,
            dob,
            city,
            nationality,
            martialStatus,
            major,
            degree,
            university,
            employmentStatus,
            contactNumber,
            expectedSalary,
            email,
            visaStatus,
            yearsOfExperience
        });
  
        submission = await submission.save()
        .catch((err) => {
          handleSqualizerErrors(err, res)
        })
        res.json({ submission });
  
      } catch (err) {
        console.error(err.message);
        res.status(500).send(i18n.__('serverError'));
      }
    }
  );
  
  // @route   get api/submission
  // @desc    get all submissions
  // @access  Public
  router.get(
      '/',
      [],
      async (req, res) => {
        await Submission.findAll()
        .then((submissions) => {
          return res.status(200).json(submissions);
        })
      }
  );
  
  // @route   Delete api/submission/id
  // @desc    show submission
  // @access  public
  router.get(
    '/:uid',
    [],
    async (req, res) => {
        // permit params
        await Submission.findOne({ where: {id: req.params.uid} })
        .then((submission) => {
            if(submission) {
                return res.status(201).json({});
            } else {
                return res.status(404).json({});
            }
        })
        .catch((err) => {
            handleSqualizerErrors(err, res)
        })
    }
);
  
  // @route   Delete api/submission/id
  // @desc    remove submission
  // @access  public
  router.delete(
      '/:uid',
      [],
      async (req, res) => {
          // permit params
          await Submission.destroy({ where: {id: req.params.uid} })
          .then((submission) => {
              if(submission) {
                  return res.status(201).json({});
              } else {
                  return res.status(404).json({});
              }
          })
          .catch((err) => {
              handleSqualizerErrors(err, res)
          })
      }
  );
  

module.exports = router;
