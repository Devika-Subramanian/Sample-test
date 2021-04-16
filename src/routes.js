const express = require('express');
const router = express.Router();

// generic route handler
// const createPet = (req, res, next) => {
//   //console.log("======request====",req)
//   res.status(201).json({
//     status: 'success',
//     data: req.body
//   });

// };


router.get('/liveness', (req, res) => res.status(200).json({ status: 'OK' }))

router.get('/pets', (req, res) => res.status(200).json({ status: 'OK' }))

// router.post('/pets', (req, res, next) => {
//   //console.log("======request====",req)
//   res.status(201).json({
//     status: 'success',
//     data: req.body
//   });

// })


module.exports = router;