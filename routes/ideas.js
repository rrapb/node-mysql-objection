const router = require("express").Router();
// const passport = require("passport");

const ideaController = require("../controllers/ideas");

router.get(
  "/ideas",
//   passport.authenticate("jwt", { session: false }),
  ideaController.getIdeas
);
router.get(
  "/ideas/:id",
//   passport.authenticate("jwt", { session: false }),
  ideaController.getIdea
);
router.post(
  "/users/:id/ideas",
//   passport.authenticate("jwt", { session: false }),
  ideaController.createIdea
);
router.delete(
  "/users/:id/ideas/:ideaId",
//   passport.authenticate("jwt", { session: false }),
  ideaController.deleteIdea
);

module.exports = router;
