import { useState, useEffect, ChangeEvent } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import ResultMessage from "../../components/ResultMessage/ResultMessage";
import { IData, ISortConfig, ISite } from "../../types/types";
import { filterTestData, sortTestData } from "../../utils/utils";
import { fetchSiteData, fetchTestData } from "../../api/api";

export function DashboardPage() {
  const [isFetching, setIsFetching] = useState(true);
  const [testsData, setTestsData] = useState<IData[]>([]);
  const [sitesData, setSitesData] = useState<ISite[]>([]);
  const [filteredData, setFilteredData] = useState<IData[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key: "",
    direction: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setSearchInput(inputValue);
    const filteredItems: IData[] = filterTestData(testsData, inputValue);
    setFilteredData(filteredItems);
  };

  const handleReset = () => {
    setSearchInput("");
    setFilteredData(testsData);
  };

  const handleSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      const [fetchedTestData, fetchedSiteData] = await Promise.all([
        fetchTestData(),
        fetchSiteData(),
      ]);

      const combinedData: IData[] = fetchedTestData.map((test) => {
        const site = fetchedSiteData.find((site) => site.id === test.siteId);
        return { ...test, url: site ? site.url : "" };
      });

      setTestsData(fetchedTestData);
      setSitesData(fetchedSiteData);
      setFilteredData(combinedData);
      setItemCount(fetchedTestData.length);
      setIsFetching(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setItemCount(filteredData.length);
  }, [filteredData]);

  useEffect(() => {
    const sortedData = sortTestData(filteredData, sortConfig, sitesData);
    setFilteredData(sortedData);
  }, [sortConfig]);

  return (
    <>
      <SearchBar
        value={searchInput}
        onChange={handleInputChange}
        itemCount={itemCount}
      />
      {isFetching ? (
        <p>Loading...</p>
      ) : itemCount === 0 ? (
        <ResultMessage handleReset={handleReset} />
      ) : (
        <Table
          data={filteredData}
          handleSort={handleSort}
          sortedColumn={sortConfig.key}
        />
      )}
    </>
  );
}
