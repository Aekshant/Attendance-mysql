const config = require('./dbconfig'); 
var mysql      = require('mysql');

var mysqlConnection = mysql.createConnection(config);

function connection(){
   
    
}
// function getStaff(req, res){
//      mysqlConnection.query('SELECT * FROM tblstaff', (err, rows, fields) => {
//             if (!err)
//                 res.send(rows);
//             else
//                 console.log(err);
//         });
// }
module.exports ={connection}
