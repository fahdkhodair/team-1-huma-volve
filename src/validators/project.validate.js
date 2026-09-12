const z = require("zod");
export const projectSchema = z.object({
    name: z.string().min(3).max(100),
    description: z.string().min(3).max(500),
    status: z.enum(["active", "inactive"]),
});

 const createProjectSchema = projectSchema;
 const getProjectSchema = projectSchema;
 const getAllProjectsSchema = projectSchema;
 const updateProjectSchema = projectSchema.partial();
 const deleteProjectSchema = projectSchema;
 const projectParamsSchema = z.object({
    id: z.string().uuid(),
});
module.exports = {
    createProjectSchema,
    getProjectSchema,
    getAllProjectsSchema,
    updateProjectSchema,
    deleteProjectSchema,
    projectParamsSchema
}