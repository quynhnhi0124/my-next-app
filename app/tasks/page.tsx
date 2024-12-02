import { TaskList } from "@/components/tasks/TaskList";
import { Task } from "@/schema/taskSchema";

export default function Todo() {

  const data: Task[] = [
    {
      id: 1,
      title: "Create list task",
      description: "Create list task",
      status: "TODO",
      createdAt: new Date(),
      subTasks: [],
    },
    {
      id: 2,
      title: "Create list task detail",
      description: "Create list task detail: list of subtasks",
      status: "TODO",
      createdAt: new Date(),
      subTasks: [],
    },
  ];
  return <TaskList tasks={data} />
}