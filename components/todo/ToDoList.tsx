"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

export function ToDoList({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-semibold">
        Task detail
      </div>
      <div className="w-full overflow-auto">
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="font-semibold">
                <TableHead className="font-semibold">Task ID</TableHead>
                <TableHead className="w-[300px] font-semibold">Title</TableHead>
                <TableHead className="font-semibold">Type</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((task) => (
                <TableRow key={task.id}>
                  <TableHead className="font-medium">{task.id}</TableHead>
                  <TableCell className="font-medium">{task.title}</TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell className="">{format(task.createdAt, "yyyy-MM-dd")}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>
      </div>
    </div>
  )
}
