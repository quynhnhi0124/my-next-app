import {
  createColumnHelper
} from '@tanstack/react-table'
import { Button } from '../button';
import { CaretDownIcon, CaretSortIcon, CaretUpIcon, Pencil2Icon } from '@radix-ui/react-icons';
import { MultiSelect } from './MultiSelect';
import { useState } from 'react';
import ItemHeaderAction from './ItemHeaderAction';

interface LevelItem {
  id: string,
  level: string,
  owner: string,
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

const TableCell = ({ getValue }: any) => {
  const initValue: LevelItem["group"] = getValue();

  return (
    <MultiSelect
      options={dataList}
      onValueChange={() => true}
      defaultValue={initValue.map((item) => item.value)}
      placeholder="Select frameworks"
      variant="inverted"
      animation={2}
      maxCount={3}
    />
  );
}

const EditCell = () => {
  const [isEdit, setIsEdit] = useState<boolean>(true);
  return (
    <Button>
      <Pencil2Icon />
      {/* <span className='ml-2 w-8'>Edit</span> */}
    </Button>
  )
}

const columnHelper = createColumnHelper<LevelItem>();

export const ItemTableColumn = [
  columnHelper.accessor('level', {
    header: ({ column }) => <ItemHeaderAction title="Level" column={column} />,
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor('group', {
    header: ({column}) => <ItemHeaderAction title="Group" column={column} />,
    cell: TableCell,
  }),
  columnHelper.accessor('owner', {
    header: ({column}) => <ItemHeaderAction title="Owner" column={column} />,
    cell: () => (<>owner</>),
  }),
  columnHelper.display({
    id: "action",
    header: () => <p>Action</p>,
    cell: EditCell,
  })
];

