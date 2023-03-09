const  {Idea}  = require('../models/idea');
const { Comment } = require('../models/comment');
const {User} = require("../models/user");




const createComment = async(req, res) => {

    const idea = await Idea.query().findById(req.params.ideaId);
    const userId = req.params.id;
    const user = await User.query().findById(userId);
    if(user){
    const comment = {
        comment: req.body.comment,
        users_id: userId,
    };
    await idea.$relatedQuery('comments').allowGraph('[comment]').insert(comment);
    res.send(idea);
    }
    res.status(404).send('User does not exists');
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