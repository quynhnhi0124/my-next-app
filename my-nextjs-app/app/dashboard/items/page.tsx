import ListItemTable from "@/components/ui/item/ItemTable";

interface LevelItem {
  id: string,
  level: string,
  group: {
    label: string,
    value: string,
  }[]
}

type SortState = {
  id: string;
  desc: boolean;
}[];

type ItemSearchParams = {
  level?: string;
  group?: string;
  sortBy?: SortState;
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

async function getData(level?: string, group?: string, sortBy?: SortState) {
  return itemList;
}

export default async function ListItem({searchParams} : {searchParams: ItemSearchParams}) {
  const { sortBy } = searchParams;
  const data = await getData(undefined, undefined, sortBy);
  const dataItem = data.map((item, index) => ({
    ...item,
    owner: "owner " + index
  }))
  return (
    <ListItemTable dataItem={dataItem}/>
  );
}