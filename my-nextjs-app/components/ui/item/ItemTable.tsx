"use client"

import { ColumnDef, flexRender, getCoreRowModel, getFacetedRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { ItemTableColumn } from "./ItemTableColumn";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/src/i18n";
import TableToolbar from "../common/TableToolbar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface LevelItem {
  id: string,
  level: string,
  owner?: string,
  group: {
    label: string,
    value: string,
  }[]
}

type SortState = {
  id: string;
  desc: boolean;
}[];

type FilterField = {
  label: string,
  value: string,
  options: Array<any>
}

type ListItemTableProps = {
  dataItem: LevelItem[],
  tableFilterField: FilterField[]
}

export default function ListItemTable({ dataItem, tableFilterField }: ListItemTableProps) {
  const searchParams = useSearchParams();
  const [sorting, setSorting] = useState<SortState>([]);
  const [data, setData] = useState<LevelItem[]>([]);
  const router = useRouter();
  const path = usePathname();

  // Set default sorting values
  const defaultSorting: SortState = [{ id: "level", desc: true }, { id: "group", desc: false }];

  const sortParams = searchParams.get("sortBy");

  useEffect(() => {
    if (sortParams) {
      const parsedSortParams = JSON.parse(sortParams);
      setSorting(parsedSortParams);
    } else {
      setSorting(defaultSorting);
    }
  }, [sortParams]);

  useEffect(() => {
    if (dataItem) {
      setData(dataItem);
    }
  }, [dataItem]);

  const columns = useMemo<ColumnDef<LevelItem>[]>(() => ItemTableColumn as any, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    manualSorting: true,
    onSortingChange: setSorting,
    isMultiSortEvent: (e) => true,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
  });

  const createQueryString = (params: SortState) => {
    const queryString = new URLSearchParams({ sortBy: JSON.stringify(params) }).toString();
    router.push(`${path}?${queryString}`);
  }

  useEffect(() => {
    createQueryString(sorting);
  }, [sorting, path, router]);

  return (
    <ScrollArea className="w-full h-full p-4">
      <TableToolbar table={table} tableFilterField={tableFilterField} />
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                >
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
    </ScrollArea>
  );
}
// const form = useForm<z.infer<typeof formSchema>>({
//   resolver: zodResolver(formSchema),
//   defaultValues: {
//     table: itemList,
//   }
// });

// interface FormProps {
//   table: LevelItem[]
// }



// const formSchema = z.object({
//   table: z.array(z.object({
//     id: z.string(),
//     level: z.string(),
//     group: z.array(z.object({
//       label: z.string(),
//       value: z.string(),
//     }))
//   }))
// })

// "use client"

// import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, RowData, useReactTable } from "@tanstack/react-table";
// import { useEffect, useMemo, useState } from "react";
// import { ItemTableColumn } from "./ItemTableColumn";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";
// import { Form, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod";
// import { useSearchParams } from "next/navigation";
// import { usePathname, useRouter } from "@/src/i18n";
// import { CaretSortIcon } from "@radix-ui/react-icons";
// interface LevelItem {
//   id: string,
//   level: string,
//   owner?: string,
//   group: {
//     label: string,
//     value: string,
//   }[]
// }

// type SortState = {
//   id: string;
//   desc: boolean;
// }[];

// export default function ListItemTable({ dataItem }: { dataItem: LevelItem[] }) {
//   const searchParams = useSearchParams();
//   const [sorting, setSorting] = useState<SortState>([]);
//   const [data, setData] = useState<LevelItem[]>([]);
//   const router = useRouter();
//   const path = usePathname();
//   const levelParams = searchParams.get("level") && undefined;
//   const groupParams = searchParams.get("group") && undefined;
//   const sortParams = searchParams.get("sortBy") && [{ id: "level", desc: true }, { id: "group", desc: false }];
//   const columns = useMemo<ColumnDef<LevelItem>[]>(() => ItemTableColumn as any, []);
//   useEffect(() => {
//     if (dataItem) {
//       setData(dataItem)
//     }
//   }, [dataItem]);
//   useEffect(() => {
//     sortParams && setSorting(sortParams)
//   }, []);

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       sorting,
//     },
//     manualSorting: true,
//     getCoreRowModel: getCoreRowModel(),
//     onSortingChange: setSorting,
//     isMultiSortEvent: (e) => true,
//   });

//   const createQueryString = (params: any) => {
//     const queryString = new URLSearchParams({ sortBy: JSON.stringify(params) }).toString()
//     router.push(`${path}?${queryString}`);
//   }

//   useEffect(() => createQueryString(sorting), [sortParams]);
//   return (
//     <Table>
//       <TableHeader>
//         {table.getHeaderGroups().map(headerGroup => (
//           <TableRow key={headerGroup.id}>
//             {headerGroup.headers.map(header => (
//               <TableHead
//                 key={header.id}
//                 colSpan={header.colSpan}
//                 onClick={header.column.getToggleSortingHandler()}
//               >
//                 {
//                   flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )
//                 }
//               </TableHead>
//             ))}
//           </TableRow>
//         ))}
//       </TableHeader>
//       <TableBody>
//         {table.getRowModel().rows.map(row => (
//           <TableRow key={row.id}>
//             {row.getVisibleCells().map(cell => (
//               <TableCell key={cell.id}>
//                 {flexRender(
//                   cell.column.columnDef.cell,
//                   cell.getContext(),
//                 )}
//               </TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }