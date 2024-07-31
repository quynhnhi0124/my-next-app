"use client"

import { useMemo } from "react";
import { Button } from "../button";
import { Input } from "../input";
import TableFaceted from "./TableFaceted";

type FilterField = {
  label: string,
  value: string,
  options: Array<any>
}

type TableToolbarProps = {
  table: any,
  tableFilterField: FilterField[],
}

export default function TableToolbar({ table, tableFilterField }: TableToolbarProps) {
  // Memoize computation of searchableColumns and filterableColumns
  const filterableColumns = useMemo(() => (tableFilterField), [tableFilterField])
  return (
    <div className="py-6">
      <div className="flex justify-between items-center py-4">
        <h2 className="text-lg">
          <b>List Item</b>
        </h2>
        <Button>Create</Button>
      </div>
      <div className="flex items-center space-x-4">
        <Input className="w-[350px]" placeholder="Search..." />
        {filterableColumns.length > 0 && filterableColumns.map(column => (
          table.getColumn(String(column.value)) && <TableFaceted
            key={String(column.value)}
            column={table.getColumn(
              column.value ? String(column.value) : ""
            )}
            title={column.label}
            options={column.options ?? []}
          />
        ))}
      </div>
    </div>
  );
}