import { useNavigate } from "react-router-dom";
import { EStatus, IData } from "../types/types";
import { extractDomain } from "../utils/utils";

interface ITableProps {
  data: IData[];
  handleSort: (key: string) => void;
  sortedColumn: string;
}

const Table = ({ data, handleSort, sortedColumn }: ITableProps) => {
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>
            {sortedColumn === "name" ? "Name 🔼" : "Name"}
          </th>
          <th onClick={() => handleSort("type")}>
            {sortedColumn === "type" ? "Type 🔼" : "Type"}
          </th>
          <th onClick={() => handleSort("status")}>
            {sortedColumn === "status" ? "Status 🔼" : "Status"}
          </th>
          <th onClick={() => handleSort("site")}>
            {sortedColumn === "site" ? "Site Columns 🔼" : "Site Columns"}
          </th>
          <th>Results</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.url && extractDomain(item.url)}</td>
            <td>
              {item.status === EStatus.DRAFT ? (
                <button
                  onClick={() => {
                    navigate(`/finalize/${item.id}`);
                  }}
                >
                  Finalize
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate(`/results/${item.id}`);
                  }}
                >
                  Results
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
