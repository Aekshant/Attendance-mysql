const {createUser,getUserByUserId, getUsers, updateUsers, deleteUser,login,getProfileByUserId} =require("./userController")
const router =require("express").Router();
const { checkToken } = require("../../middleware/validation");
const {admin}=require("../../middleware/admin");
const {adminUser} = require("../../middleware/adminUser")

router.post("/staffCreate" , checkToken ,admin,createUser);
router.get("/all", checkToken , admin ,getUsers);
router.get("/staffid/:id", checkToken, getUserByUserId)
router.get("/profile",checkToken, getProfileByUserId)

router.put("/staffUpdate/:id", checkToken, adminUser, updateUsers);
router.delete("/staffDelete", checkToken, admin, deleteUser);
router.post("/login", login);
module.exports=router;