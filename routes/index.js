const express = require("express");
const router = express.Router();

const { register } = require("../controller/AuthController");
const validationMiddleware = require("../middleware/validationMiddleware");
const { validationRegister } = require("../validators/authValidator");
const { index, detail, detailByEmail, destroy,update} = require("../controller/UserController");



router.post("/register", validationRegister, validationMiddleware, register);
router.get("/users", index);
router.get("/users/:id", detail);
router.get("/users/email/:email", detailByEmail);
router.delete("/users/:id", destroy);
router.put("/users/update/:id", update);



module.exports = router;
