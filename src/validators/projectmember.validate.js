import z from "zod";
 export const projectMemberSchema = z.object({
    projectId: z.string().uuid(),
    userId: z.string().uuid(),
    role: z.enum(["admin", "member"]),
});
 export const addMemberSchema = projectMemberSchema;
 export const removeMemberSchema = projectMemberSchema;
 export const memberParamsSchema = z.object({
    id: z.string().uuid(),
});
