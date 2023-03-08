const router = require("express").Router();
const passport = require("passport");
const authenticate = require('../middleware/passport')

const userController = require("../controllers/users");

router.post("/register",  userController.register);
router.post("/login",  userController.login);
router.get("/users", authenticate, userController.getUsers);
router.get('/users/:id', authenticate, userController.getUser)

module.exports = router;  