const {createUser,getUserByUserId, getUsers, updateUsers, deleteUser,login,getProfileByUserId} =require("./userController")
const router =require("express").Router();
const { checkToken } = require("../../auth/validation");
const {admin}=require("../../auth/admin");

router.post("/staffCreate" , checkToken ,createUser);
router.get("/all", checkToken , admin ,getUsers);
router.get("/staffid/:id",checkToken,getUserByUserId)
router.get("/profile",checkToken ,getProfileByUserId)

router.patch("/staffUpdate",checkToken,updateUsers);
router.delete("/staffDelete",checkToken,deleteUser);
router.post("/login", login);
module.exports=router;