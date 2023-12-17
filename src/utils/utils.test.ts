import { EStatus, EType, IData } from "../types/types";
import { extractDomain, filterTestData } from "./utils";

test("extractDomain should return domain without protocol and www", () => {
  const url = "https://www.example.com";
  const domain = extractDomain(url);
  expect(domain).toBe("example.com");
});

test("filterTestData should return filtered data based on input value", () => {
  const data: IData[] = [
    {
      id: 1,
      name: "Apple",
      type: EType.CLASSIC,
      status: EStatus.ONLINE,
      siteId: 1,
    },
    {
      id: 2,
      name: "Banana",
      type: EType.SERVER_SIDE,
      status: EStatus.ONLINE,
      siteId: 2,
    },
    {
      id: 3,
      name: "Carrot",
      type: EType.CLASSIC,
      status: EStatus.ONLINE,
      siteId: 1,
    },
  ];
  const inputValue = "e";
  const filteredData = filterTestData(data, inputValue);
  expect(filteredData).toEqual([
    {
      id: 1,
      name: "Apple",
      type: EType.CLASSIC,
      status: EStatus.ONLINE,
      siteId: 1,
    },
  ]);
});
