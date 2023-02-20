const router = require("express").Router();

const userController = require("../controllers/users");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/users", userController.getUsers);
router.get('/users/:id', userController.getUser)

module.exports = router;  