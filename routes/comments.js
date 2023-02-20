const router = require("express").Router();
// const passport = require("passport");

const commentController = require("../controllers/comments");

router.post(
  "/users/:id/ideas/:id/comments",
//   passport.authenticate("jwt", { session: false }),
  commentController.createComment
);
router.delete(
  "/users/:id/ideas/:id/comments/:commentId",
//   passport.authenticate("jwt", { session: false }),
  commentController.deleteComment
);

module.exports = router;
