
const {createGeofence,getGeofence,getGeofenceById,updateGeofence,deleteGeofence} = require("./geofenceService")
const {compare} = require("bcrypt");
var {sign} = require('jsonwebtoken');

module.exports ={
    createGeofence: (req, res) => {
        const body = req.body;
        createGeofence(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },
      getGeofence: (req, res) => {
        getGeofence((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getGeofenceById: (req, res) => {
        const id = req.params.id;
        getGeofenceById(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 1,
              data: [],
              message: "Record not Found"
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      updateGeofence: (req, res) => {
        const body = req.body;
        updateGeofence(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },
      deleteGeofence: (req, res) => {
        const data = req.body;
        deleteGeofence(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "user deleted successfully"
          });
        });
      }
    }