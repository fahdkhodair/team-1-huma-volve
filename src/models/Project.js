const mongoose = require("mongoose")
const projectSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
       maxlength: 100,
    },
    description:{
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 2000,
    },
      owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Memebers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    stauts: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
})

module.exports = mongoose.model("Project", projectSchema)