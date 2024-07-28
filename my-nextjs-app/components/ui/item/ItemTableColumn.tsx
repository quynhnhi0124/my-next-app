import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Button } from '../button';
import { Pencil2Icon } from '@radix-ui/react-icons';
import { MultiSelect } from './MultiSelect';
import { useState } from 'react';
import { FormControl, FormField, FormItem } from '../form';
import Link from 'next/link';

interface LevelItem {
  id: string,
  level: string,
  group: {
    label: string,
    value: string,
  }[]
}

const dataList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

const TableCell = ({ getValue, row, column, table }: any) => {
  const initValue: LevelItem["group"] = getValue();
  const meta = table.options.meta
  return (
    // <FormField
    //   name={`table.${row.id}.group`}
    //   control={meta.form.control}
    //   {...meta.form.register(`table.${row.id}.group`)}
    //   render={({ field }) => {
    //     console.log(field)
    //     return (
    //       <FormItem>
    //         <FormControl>
              <MultiSelect
                options={dataList}
                onValueChange={() => true}
                defaultValue={initValue.map((item) => item.value)}
                placeholder="Select frameworks"
                variant="inverted"
                animation={2}
                maxCount={3}
              />
    //         </FormControl>
    //       </FormItem>
    //     )
    //   }}>
    // </FormField>
  );
}

const EditCell = () => {

  const [isEdit, setIsEdit] = useState<boolean>(true);
  const toggleEdit = () => setIsEdit(!isEdit);

  return (
    // <Link href="/">
      <Button>
        <Pencil2Icon />
        {/* <span className='ml-2 w-8'>Edit</span> */}
      </Button>
    // </Link>
  )
}

const columnHelper = createColumnHelper<LevelItem>();

export const ItemTableColumn = [
  columnHelper.accessor('level', {
    header: () => <p>Level</p>,
    cell: (info) => <p>{info.getValue()}</p>
  }),
  columnHelper.accessor('group', {
    header: () => <p>Group</p>,
    cell: TableCell,
  }),
  columnHelper.display({
    id: "action",
    header: () => <p>Action</p>,
    cell: EditCell,
  })
];

