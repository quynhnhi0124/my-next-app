import { CaretDownIcon, CaretSortIcon, CaretUpIcon } from "@radix-ui/react-icons";

export default function ItemHeaderAction({ column, title }: { column: any, title: string }) {
  return (
    <div className='flex justify-between items-center'>
      <p>{title}</p>
      {column.isSorted
        ? column.isSortedDesc
          ? <CaretDownIcon />
          : <CaretUpIcon />
        : <CaretSortIcon />}
    </div>
  );
}