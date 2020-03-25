const express = require('express');
const Feedback = require('../models/feedback.js');

const router = express.Router();

router.get('/', async (req, res) => {
  const feedback = await Feedback.find();
  return res.status(200).send(feedback);
});

router.post('/', async (req, res) => {
  let feedback = [];
  
  if(Array.isArray(req.body)) {
    req.body.forEach(async item => feedback.push(await Feedback.create(item)));

  } else {
    console.log( req.body)
    feedback.push(await Feedback.create(req.body));
  }
  return res.status(201).send({
    error: false,
    feedback
  });
});

module.exports = router;