const jwt = require("jsonwebtoken");
const pool = require("../dbconfig")
module.exports = {
  admin: (req, res, next) => {
    let adminid=req.staff
    // let token = req.get("authorization");
    
    // if (token) {
    //     token = token.slice(7);
    //     jwt.verify(token,"qwe1234", (err, decoded) => {

    //         let adminEmail = decoded.results.email;
    //         var sql = "SELECT * FROM tblstaff where admin=1";
    //         pool.query(sql,[],(err,results)=>{
    //             if (err) {
    //                 callBack(err);
    //               }
    //               console.log(results);
    //             });


            //   if(adminID == 1){
            //       next()
            //   }else {
            //     return res.json({
            //       success: 0,
            //       message: "Access Denied! Unauthorized Admin"
            //     });
            //   }
            // console.log(req.staff);
            
        }
      } 
   

   

