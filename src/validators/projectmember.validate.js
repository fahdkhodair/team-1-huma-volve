const z = require("zod");
 const projectMemberSchema = z.object({
    projectId: z.string().uuid(),
    userId: z.string().uuid(),
    role: z.enum(["admin", "member"]),
});
 const addMemberSchema = projectMemberSchema;
 const removeMemberSchema = projectMemberSchema;
 const memberParamsSchema = z.object({
    id: z.string().uuid(),
});
module.exports = {
    projectMemberSchema,
    addMemberSchema,
    removeMemberSchema,
    memberParamsSchema
};