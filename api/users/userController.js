const {create,  getUserByUserId, getUsers, updateUser, deleteUser,getUserByUserEmail, getProfileByUserId} =require("./userService");
const {admin}=require("../../auth/admin")
const { hashSync, genSaltSync,compare} = require("bcrypt");
var {sign} = require('jsonwebtoken');
const pool = require("../../dbconfig")
module.exports ={
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        pool.query('SELECT email FROM tblstaff WHERE email ="' +body.email+'"', function (err, result) {
          if (err) throw err;
          //You will get an array. if no users found it will return.
          if(!result.length){  
        create(body, (err, results) => {
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
      }else{
        return res.status(500).json({
          success: 0,
          message: "Email already Exist"
        });
      }
      })
      },
      getUserByUserId: (req, res) => {
        console.log(req.staff);
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
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
      //get by id ends
      getProfileByUserId: (req, res) => {
        const id = req.staff.staffid;
        getProfileByUserId(id, (err, results) => {
          
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
  getUsers: (req, res) => {
    getUsers((err, results) => {
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
  updateUsers: (req, res) => {
    const body = req.body;
    updateUser(body, (err, results) => {
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
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });
  },//delete staff ends
   login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      results = results[0];
      
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compare(body.password, results.password);
      if (result) {
        results.password = undefined;
        
        const jsontoken = sign({ results } , "qwe1234", {
          expiresIn: "24h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  },

}