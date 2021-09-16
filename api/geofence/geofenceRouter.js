const router =require("express").Router();
const {createGeofence,getGeofence,getGeofenceById,updateGeofence,deleteGeofence} = require("./geofenceController")
const { checkToken } = require("../../middleware/validation");
const {admin}=require("../../middleware/admin");

router.post("/geofenceCreate",createGeofence);
router.get("/all", checkToken, admin, getGeofence);
router.get("/byID/:id",getGeofenceById);
router.patch("/geofenceUpdate",updateGeofence);
router.delete("/geofenceDelete",deleteGeofence);


module.exports=router;