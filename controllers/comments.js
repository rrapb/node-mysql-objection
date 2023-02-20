const { Idea } = require('../models/idea');
const { Comment } = require('../models/comment');


const createComment = async(req, res) => {
    const idea = await Idea.query().findById(req.params.id);
    await idea.$relatedQuery('comments').allowGraph('[comment]').insert(req.body);

    res.send(idea);
}


const deleteComment = async(req, res) => {
    const idea = await Idea.query().findById(req.params.id);
    await Comment.query().deleteById(req.params.commentId)

    // res.redirect(`/ideas/${req.params.id}`);
    res.send(idea)
}

module.exports = {
    createComment,
    deleteComment
  };