import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    email :{
        required: true,
        type: String,
        unique: true
    },
    password :{
        required: true,
        type: String
    },
   role: {
  type: String,
  enum: ["user", "admin"],
  required: true,
  default: "user"
}
},{timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;
