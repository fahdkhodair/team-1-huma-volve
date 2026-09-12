const member = require("../models/Project Members.js");

  const addMember = async (req, res) => {
    try {
        const{userId} =req.body;
        const project = await member.findById(req.params.id);
        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }
         const alreadyMember = project.members.find((member) => member.user.toString() === userId);
         if (alreadyMember) {
            return res.status(400).json({
                message: "User is already a member",
            });
         }
         project.members.push({user:userId});
         await project.save();
         res.status(201).json({
            success: true,
            message: "Member added successfully",
         });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

  const removeMember = async (req, res, next) => {
  try {
    const { id, userId } = req.params;

    const project = await member.findById(id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const member = project.members.find(
      (member) => member.user.toString() === userId
    );

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }

    if (member.role === "owner") {
      return res.status(400).json({
        message: "Project owner cannot be removed",
      });
    }

    project.members = project.members.filter(
      (member) => member.user.toString() !== userId
    );

    await project.save();

    res.json({
      success: true,
      message: "Member removed successfully",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
    addMember,
    removeMember,
};
