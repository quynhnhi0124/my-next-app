"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { useMemo, useState } from 'react';
import { Label } from "@/components/ui/label"
import { MultiSelect } from '@/components/ui/item/MultiSelect';
import { dataList } from '@/data';

type FilterItemDefinition = {
  value: string;
  label: string;
};
interface FilterProps {
  // items: FilterItemDefinition[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}
export default function DashboardPage({ value, onValueChange }: FilterProps) {
  const [internalValue, setInternalValue] = useState<string[]>([]);
  const items: FilterItemDefinition[] = [
    {
      value: "value1",
      label: "label1",
    },
    {
      value: "value2",
      label: "label2",
    },
    {
      value: "value3",
      label: "label3",
    },
  ];

  const handleItemClick = function (item: FilterItemDefinition) {
    const newValue = selectedValues.includes(item.value)
      ? selectedValues.filter((value) => value !== item.value)
      : [...selectedValues, item.value];
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const selectedValues = useMemo(() => {
    return value !== undefined ? value : internalValue;
  }, [value, internalValue]);

  return (
    <>
      {/* <div className="relative">
        <Label htmlFor="account" className='absolute'>Account</Label>
        <Input id="Account" className='my-4 w-[350px]' />
        <fieldset aria-hidden="true">
          <legend>Account</legend>
        </fieldset>
      </div> */}
      {/* <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="justify-between">
            Filter data
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
          {items.map((item) => {
            return (
              <DropdownMenuCheckboxItem
                key={item.value}
                checked={selectedValues.includes(item.value)}
                onCheckedChange={() => handleItemClick(item)}
                onSelect={(e) => e.preventDefault()}
              >
                {item.label}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu> */}
      <MultiSelect
        options={dataList}
        onValueChange={() => true}
        defaultValue={[]}
        placeholder="Select frameworks"
        variant="inverted"
        animation={2}
        maxCount={3}
      />
    </>
  );
}