import { ToDoList } from "@/components/todo/ToDoList";

export default function Todo() {

  const data= [
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
      type: "FIX",
      status: "TODO",
      createdAt: new Date(),
    },
  ];
  return <ToDoList data={data} />
}