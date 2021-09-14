var mysql      = require('mysql');
const dboperations = require("../dboperations");
function getStaff(req, res){
    dboperations.query('SELECT * FROM tblstaff', (err, rows, fields) => {
           if (!err)
               res.send(rows);
           else
               console.log(err);
       });
    }
module.exports ={getStaff}