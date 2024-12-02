import { z } from "zod";

export const subTaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  type: z.enum(["STUDY", "CREATE","REVIEW","CORRECT"]),
  status: z.enum(["TODO","IN_PROGRESS","DONE","CANCEL"]),
  createdAt: z.union([z.date(), z.string()]),
}).optional().nullable()

export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.enum(["TODO","IN_PROGRESS","DONE","CANCEL"]),
  createdAt: z.union([z.date(), z.string()]),
  subTasks: z.array(
    subTaskSchema
  ),
})

export type Task = z.infer<typeof taskSchema>;

export type SubTask = z.infer<typeof subTaskSchema>;
