const project = require('../models/project')
  const createproject = async(req,res) =>{
    try {
        const {name,description} = req.body;
        const project = await project.create({
            name,
            owner:req.user.id,
            description,
            members:[req.user.id]
        });
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
  const getproject = async(req,res) =>{
    try {
        const project = await project.findById(req.params.id).populate("owner members.user", "name email");
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const getprojects = async(req,res) =>{
    try {
        const projects = await project.find().populate("owner members.user", "name email");
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
 const updateProject = async (req, res, next) => {
  try {
    const { name, description, status } = req.body;

    const project = await project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    project.name = name ?? project.name;
    project.description = description ?? project.description;
    project.status = status ?? project.status;

    await project.save();

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};
  const deleteproject = async(req,res) =>{
    try {
        const project = await project.findByIdAndDelete(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports = {
    createproject,
    getproject,
    getprojects,
    updateProject,
    deleteproject,
};
