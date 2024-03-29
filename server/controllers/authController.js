const db = require("../models");
const { signToken, routeMiddleware } = require("../utils/auth");

module.exports = {
  signUp: async function (req, res) {
    console.log(req.body);
    try {
      const newUser = await db.Users.create({
        email: req.body.email,
        password: req.body.password,
      });
      console.log(newUser);
      const token = signToken(newUser);

      console.log("\n SIGNUP", token);

      res.json({ newUser, token });
    } catch (error) {
      res.json(error);
    }
  },
  checkAuth: function (req, res) {
    return res.status(200).json({ message: "TOKEN VERIFIED" });
  },
  login: async function (req, res) {
    try {
      const user = await db.Users.findOne({ email: { $eq: req.body.email } });
      if (!user) {
        console.log("No user with that email was found.");
        return res.status(404);
      }

      const correctPassword = await user.checkPassword(req.body.password);

      if (!correctPassword) {
        console.log("Password is incorrect.");
        return res.status(401).json("Password is incorrect.");
      }

      //creates the jwt for the user
      const token = signToken(user);
      res.json({ user, token });
    } catch (error) {
      console.log(error);
      res.status(400);
    }
  },
};
