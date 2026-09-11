import User from "../models/User.js";


export const GetAllUsers = async (__req, res) => {
  const users = await User.find();
  res.status(200).json({ message: "All users retrieved", users });
};
export const GetUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User retrieved", user });
};
