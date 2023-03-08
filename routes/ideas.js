const router = require("express").Router();
const passport = require("passport");
// require('../middleware/passport')(passport);
const ideaController = require("../controllers/ideas");
const authenticate = require('../middleware/passport')

router.get(
    "/ideas",
    authenticate,
    ideaController.getIdeas
);
router.get(
    "/ideas/:id",
    authenticate,
    ideaController.getIdea
);
router.post(
    "/users/:id/ideas",
    authenticate,
    ideaController.createIdea
);
router.delete(
    "/users/:id/ideas/:ideaId",
    authenticate,
    ideaController.deleteIdea
);

module.exports = router;
