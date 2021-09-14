const {createUser,getUserByUserId, getUsers, updateUsers, deleteUser,login} =require("./userController")
const router =require("express").Router();
const { checkToken } = require("../../auth/validation");

router.post("/staffCreate" , checkToken ,createUser);
router.get("/", checkToken ,getUsers);
router.get("/:id",checkToken,getUserByUserId);
router.get("/profile",checkToken ,getUserByUserId);

router.patch("/staffUpdate",checkToken,updateUsers);
router.delete("/staffDelete",checkToken,deleteUser);
router.post("/login", login);
module.exports=router;