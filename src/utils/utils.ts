import { IData, ISite, ISortConfig } from "../types/types";

export const extractDomain = (url: string) => {
  const domain = url.replace(/(^\w+:|^)\/\/|(www.)/g, "");
  return domain;
};

export function filterTestData(data: IData[], inputValue: string): IData[] {
  return data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );
}

export function sortTestData(
  data: IData[],
  sortConfig: ISortConfig,
  sitesData: ISite[]
): IData[] {
  if (sortConfig.key === "") {
    return data;
  }

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === "name" || sortConfig.key === "type") {
      const aValue = a[sortConfig.key] || "";
      const bValue = b[sortConfig.key] || "";
      return aValue.localeCompare(bValue);
    } else if (sortConfig.key === "status") {
      const statusOrder = ["ONLINE", "PAUSED", "STOPPED", "DRAFT"];
      return (
        statusOrder.indexOf(a[sortConfig.key]) -
        statusOrder.indexOf(b[sortConfig.key])
      );
    } else if (sortConfig.key === "site") {
      const aSite = sitesData.find((site) => site.id === a.siteId);
      const bSite = sitesData.find((site) => site.id === b.siteId);
      const aValue = aSite?.url || "";
      const bValue = bSite?.url || "";
      return aValue.localeCompare(bValue);
    }
    return 0;
  });

  if (sortConfig.direction === "descending") {
    sortedData.reverse();
  }

  return sortedData;
}
