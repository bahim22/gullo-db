const express = require('express')

const recordRoutes = express.Router()

const dbo = require('../db/conn')

//convert id string to ObjId for _id
const ObjectId = require('mongodb').ObjectId

//get list of all records
recordRoutes.route('/record').get(function (req, res) {
  let db_connect = dbo.getDb('employees')
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

//get single record by id

recordRoutes.route('/record/:id').get(function (req, res) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId( req.params.id )}
  db_connect
    .collection('records')
    .findOne(myquery, function (err, result) {
      if (err) throw err
      res.json(result)
    })
})

//create new record

recordRoutes.route('/record/add').post(function (req, response) {
  let db_connect = dbo.getDb()
  let myobj = {
    person_name: req.body.person_name,
    person_position: req.body.person_position,
    person_level: req.body.person_level,
  }
  db_connect.collection('records').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res)
  })
})

// update record by id

recordRoutes.route('/update/:id').post(function (req, response) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId( req.params.id )}
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    }
  }
  db_connect
    .collection('records')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err
      console.log('1 doc updated')
      response.json(res)
    })
})

// delete a record

recordRoutes.route('/:id').delete((req, response) => {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId( req.params.id )}
  db_connect.collection('records').deleteOne(myquery, function (err, obj) {
    if (err) throw err
    console.log('1 doc deleted')
    response.status(obj);
  })
})

module.exports = recordRoutes;
