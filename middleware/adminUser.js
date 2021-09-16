const { decode } = require("jsonwebtoken");

module.exports = {
    adminUser: (req, res, next) => {
      let decodeid=req.staff.staffid;
      let paramid=req.params.id;
          if(req.staff.admin == 1 || decodeid == paramid ){
            next();
          }else{
            return res.json({
              success: 0,
              message: "Access Denied! Unauthorized Admin and user"
            });
          }
        } 
      }
     
  
     
  
  