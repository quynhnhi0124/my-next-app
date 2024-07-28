"use client"

import { ColumnDef, flexRender, getCoreRowModel, RowData, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { ItemTableColumn } from "./ItemTableColumn";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";
import { Form, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void,
    form: any,
  }
}


interface LevelItem {
  id: string,
  level: string,
  group: {
    label: string,
    value: string,
  }[]
}

interface FormProps {
  table: LevelItem[]
}

const itemList: LevelItem[] = [
  {
    id: "1",
    level: "level 1",
    group: [{
      value: "react",
      label: "React"
    }]
  },
  {
    id: "2",
    level: "level 2",
    group: [{
      value: "angular",
      label: "Angular"
    }],
  },
  {
    id: "3",
    level: "level 3",
    group: [{
      value: "vue",
      label: "Vue"
    }],
  },
  {
    id: "4",
    level: "level 4",
    group: [{
      value: "svelte",
      label: "Svelte"
    }],
  },
  {
    id: "5",
    level: "level 5",
    group: [{
      value: "ember",
      label: "Ember"
    }],
  },

];

const formSchema = z.object({
  table: z.array(z.object({
    id: z.string(),
    level: z.string(),
    group: z.array(z.object({
      label: z.string(),
      value: z.string(),
    }))
  }))
})


export default function ListItemTable() {
  const columns = useMemo<ColumnDef<LevelItem>[]>(() => ItemTableColumn as any, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      table: itemList,
    }
  });

  const { fields } = useFieldArray({
    name: 'table',
    control: form.control,
  })


  const table = useReactTable({
    data: fields,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => true,
      form,
    }
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };
  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    }
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
    //   </form>
    // </Form>
  );
}