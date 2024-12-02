import { Task } from "@/schema/taskSchema"
import { DataTable } from "../table/DataTable";
import { taskTableColumns } from "./TaskTable/TaskTableColumns";
import { useMemo } from "react";

type TaskTableProps = {
  tasks: Task[]
}
export function TaskList({tasks}: TaskTableProps) {

  const columns = useMemo(
    () => taskTableColumns,
    []
  )
  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-semibold">
        List of Tasks
      </div>
      <DataTable columns={columns} data={tasks} />
    </div>
  );
}