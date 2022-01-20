const express = require("express");
const router = express.Router();
const { register } = require("../controller/AuthController");
const validationMiddleware = require("../middleware/validationMiddleware");
const { validationRegister } = require("../validators/authValidator");
const {index} = require("../controller/UserController");


router.post("/register", validationRegister, validationMiddleware, register);
router.get("/users", index);
router.get("users/:id", index);


module.exports = router;
