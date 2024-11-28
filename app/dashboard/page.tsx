"use client"

import { useMemo, useState } from 'react';

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
      {/* <MultiSelect
        options={dataList}
        onValueChange={() => true}
        defaultValue={[]}
        placeholder="Select frameworks"
        variant="inverted"
        animation={2}
        maxCount={3}
      /> */}
    </>
  );
}