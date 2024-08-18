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
};

type ItemSearchParams = {
  level?: string;
  group?: string;
  sortBy?: string;
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

type searchState = {
  page?: number,
  limit?: number,
  sort?: { [name: string]: string },
  filter?: { [name: string]: string }
}
//modify url params and call api here
async function getData(level?: string, group?: string, sortBy?: string) {
  let sort = [];
  let searchParams: searchState = {};
  if (!searchParams.sort) {
    searchParams.sort = {};
  }
  const parseData = sortBy ? JSON.parse(sortBy) : [];
  parseData.forEach((item: SortState) => {
    searchParams.sort![item.id] = item.desc ? "DESC" : "ASC"
  })

  return itemList;
}

export default async function ListItem({ searchParams }: { searchParams: ItemSearchParams }) {
  const { level, group, sortBy } = searchParams;
  const data = await getData(level, group, sortBy);
  const subsidiaryList = [{ id: 1, name: "React Sub1" }, { id: 2, name: "Angular Sub2" }];
  const groupList = [{ id: 1, name: "React" }, { id: 2, name: "Angular" }];
  const tableFilterField = [
    {
      label: "Subsidiary",
      value: "subsidiary",
      options: subsidiaryList
    },
    {
      label: "Group",
      value: "group",
      options: groupList
    },
  ];
  const dataItem = data.map((item, index) => ({
    ...item,
    owner: "owner " + index
  }))
  return (
    <ListItemTable dataItem={dataItem} tableFilterField={tableFilterField} />
  );
}