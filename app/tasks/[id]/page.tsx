import { ToDoList } from "@/components/todo/ToDoList";

export default function TaskDetail() {

  const data = [
    // {
    //   id: 1,
    //   title: "Create list task",
    //   description: "Create list task",
    //   status: "TODO",
    //   createdAt: new Date(),
    //   subTasks: [],
    // },
    // {
    //   id: 2,
    //   title: "Create list task detail",
    //   description: "Create list task detail: list of subtasks",
    //   status: "TODO",
    //   createdAt: new Date(),
    //   subTasks: [],
    // },
    {
      id: 1,
      title: "Study Requirements",
      type: "STUDY",
      status: "TODO",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Coding",
      type: "CREATE",
      status: "TODO",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Review code",
      type: "REVIEW",
      status: "TODO",
      createdAt: new Date(),
    },
    {
      id: 4,
      title: "Fix bug",
      type: "CORRECT",
      status: "TODO",
      createdAt: new Date(),
    },
  ];
  return <ToDoList data={data} />
}