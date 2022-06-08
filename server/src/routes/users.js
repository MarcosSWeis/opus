const { Router } = require("express");
const { signIn } = require("../controllers/auth");
const {
  updateUser,
  createUser,
  getUserById,
  deleteUser,
  getUsers,
} = require("../controllers/user.controller");
const { checkDuplicateEmailOrDni } = require("../middleware/verifyCreate");
const { verifyToken, isAdmin, isUser } = require("../middleware/authJwt");
const router = Router();

/* Creating a router object and then using it to define the routes for the API. */
router.get("/all",[verifyToken,isAdmin], getUsers);
router.put("/update/:id",[verifyToken ], updateUser);
router.post("/create", [verifyToken,isAdmin,checkDuplicateEmailOrDni], createUser);
router.get("/get/:id",[verifyToken,isAdmin], getUserById);
router.delete("/delete/:id",[verifyToken,isAdmin], deleteUser);
router.post('/signin', signIn)

module.exports = router;
