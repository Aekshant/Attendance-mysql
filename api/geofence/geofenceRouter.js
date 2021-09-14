const router =require("express").Router();
const {createGeofence,getGeofence,getGeofenceById,updateGeofence,deleteGeofence} = require("./geofenceController")


router.post("/geofenceCreate",createGeofence);
router.get("/",getGeofence);
router.get("/:id",getGeofenceById);
router.patch("/geofenceUpdate",updateGeofence);
router.delete("/geofenceDelete",deleteGeofence);


module.exports=router;