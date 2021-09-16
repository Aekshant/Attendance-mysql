const pool = require("../../dbconfig")


module.exports ={
    create:(data, callBack) =>{
        var sql = "INSERT INTO tblstaff (email, firstname, lastname, password) VALUES (?, ?, ?, ?)";
        pool.query(sql, [data.email, data.firstname, data.lastname,data.password], (err, results) => {
            if (err)
            return callBack(err);
        else
            return callBack(null,results);
        })
    },//create staff End

    getUsers: callBack =>{
        var sql="SELECT * FROM tblstaff";
        pool.query(sql,[],(err,results)=>{
            if (err) {
                callBack(err);
              }
              return callBack(null, results);
            }
          );
        },//get whole table

    getUserByUserId:(id,callBack)=>{
        var sql="SELECT * FROM tblstaff WHERE staffid = ?"
        pool.query(sql,[id],(error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },//end getting by id

      getProfileByUserId:(id,callBack)=>{
        var sql="SELECT profile_image FROM tblstaff WHERE staffid = ?"
        pool.query(sql,[id],(error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },//end getting by id

    updateUser: (data, callBack) => { 
        var sql = "UPDATE tblstaff set email=?, firstname =? , lastname =?  WHERE staffid = ?";
        pool.query(sql,
          [data.body.email,data.body.firstname,data.body.lastname,data.staffid],
          (error, results) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },//end update user
      deleteUser: (data, callBack) => {
        let sql = "DELETE FROM tblstaff WHERE staffid = ?";
        pool.query(sql,[data.staffid],(error, results) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          });
      },//deletes user ends here

      getUserByUserEmail: (email, callBack) => {
        let sql="select * from tblstaff where email = ?";
        pool.query(sql,[email],(error, results) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
}