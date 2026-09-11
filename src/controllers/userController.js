const User = require("../models/User");
exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  res.json(users);
};
exports.getuserbyid = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
}
exports.updateuserbyid = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  const user = await User.findByIdAndUpdate(id, { name, email, password });
  res.json(user);
}
exports.deleteuserbyid = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  res.json(user);
}