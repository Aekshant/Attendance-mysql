
module.exports = {
  admin: (req, res, next) => {
        if(req.staff.admin){
          next();
        }else{
          return res.json({
            success: 0,
            message: "Access Denied! Unauthorized Admin"
          });
        }
      } 
    }
   

   

