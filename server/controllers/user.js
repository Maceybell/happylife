const { User, Plan } = require("../util/models");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      let users = await User.findAll({
        include: [Plan],
      });
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getThisUser: async (req, res) => {
    try {
      let {userId} = req.params
      let user = await User.findOne({
        where: {id:+userId} ,
        include: [Plan],
      });
      res.status(200).send(user);
    } catch (err) {
      console.log(err)
      res.status(400).send(err);
    }
  },
};
