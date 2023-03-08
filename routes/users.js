const router = require("express").Router();
const passport = require("passport");

const userController = require("../controllers/users");

router.post("/register",  userController.register);
router.post("/login",  userController.login);
router.get("/users", passport.authenticate("jwt", { session: false }), userController.getUsers);
router.get('/users/:id', passport.authenticate("jwt", { session: false }),userController.getUser)

module.exports = router;  