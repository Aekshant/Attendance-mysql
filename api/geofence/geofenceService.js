const pool = require("../../dbconfig")


module.exports ={
    createGeofence:(data, callBack) =>{
        var sql = "INSERT INTO tblgeofence (name, latitude, longitude,radius) VALUES (?, ?, ?, ?)";
        pool.query(sql, [data.name, data.latitude, data.longitude,data.radius], (err, results) => {
            if (err)
            return callBack(err);
        else
            return callBack(null,results);
        })
    },//create geofence End
    getGeofence: callBack =>{
        var sql="SELECT * FROM tblgeofence";
        pool.query(sql,[],(err,results)=>{
            if (err) {
                callBack(err);
              }
              return callBack(null, results);
            }
          );
        },//get whole table
        getGeofenceById:(id,callBack)=>{
            var sql="SELECT * FROM tblgeofence WHERE geo_id = ?"
            pool.query(sql,[id],(error, results, fields) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results[0]);
              }
            );
          },//end getting by id
          updateGeofence: (data, callBack) => { 
            var sql = "UPDATE tblgeofence set name =?,latitude =?,longitude=?,radius=? WHERE geo_id = ?";
            pool.query(sql,
              [data.name, data.latitude, data.longitude, data.radius, data.geo_id],
              (error, results) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results);
              }
            );
          },//end update user
          deleteGeofence: (data, callBack) => {
            let sql = "DELETE FROM tblgeofence WHERE geo_id = ?";
            pool.query(sql,[data.geo_id],(error, results) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results[0]);
              });
          }
}