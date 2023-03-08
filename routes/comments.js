const router = require("express").Router();
const passport = require("passport");
const authenticate = require('../middleware/passport')

const commentController = require("../controllers/comments");

router.post(
  "/users/:id/ideas/:id/comments",
  authenticate,
  commentController.createComment
);
router.delete(
  "/users/:id/ideas/:id/comments/:commentId",
  authenticate,
  commentController.deleteComment
);

module.exports = router;
