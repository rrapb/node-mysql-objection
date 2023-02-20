const { Idea } = require('../models/idea');
const { User } = require('../models/user');

const getIdeas = async(req, res) => {
    const ideas = await Idea.query();
    res.json(ideas);
};

const getIdea = async(req, res) => {
    const idea = await Idea.query()
    .findById(req.params.id)
    .withGraphFetched('comments');
    res.send(idea);
};

const createIdea = async(req, res) => {
    const user = await User.query().findById(req.params.id);
    await user.$relatedQuery('ideauser').allowGraph('[idea]').insert(req.body);

    res.send(user);
}


const deleteIdea = async(req, res) => {
    const user = await User.query().findById(req.params.id);
    await Idea.query().deleteById(req.params.ideaId)

    res.send(user);
}

module.exports = {
    getIdea,
    getIdeas,
    createIdea,
    deleteIdea
  };