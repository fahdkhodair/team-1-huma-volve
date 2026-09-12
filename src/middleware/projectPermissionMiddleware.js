 const projectPermissionMiddleware = (req, res, next) => {
    const { user } = req;
    const { projectId } = req.params;
    
    // Check if user is owner or member of the project
    const project = user.projects.find((project) => project._id.toString() === projectId);
    
    if (!project) {
        return res.status(403).json({
            success: false,
            message: "You don't have permission to access this project",
        });
    }
    
    next();
};
module.exports = projectPermissionMiddleware;