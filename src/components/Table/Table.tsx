import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { EStatus, IData } from "../../types/types";
import { extractDomain } from "../../utils/utils";
import Button from "../Button/Button";
import styles from "./Table.module.css";

interface ITableProps {
  data: IData[];
  handleSort: (key: string) => void;
  sortedColumn: string;
}

const Table = ({ data, handleSort, sortedColumn }: ITableProps) => {
  const navigate = useNavigate();

  const SITE_COLORS = ["#E14165", "#C2C2FF", "#8686FF"];

  const statusClass = (status: EStatus) => {
    return classNames({
      [styles.draft]: status === EStatus.DRAFT,
      [styles.paused]: status === EStatus.PAUSED,
      [styles.stopped]: status === EStatus.STOPPED,
      [styles.online]: status === EStatus.ONLINE,
    });
  };

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
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
            {sortedColumn === "site" ? "Site 🔼" : "Site"}
          </th>
          <th>Results</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={styles.tr}>
            <td>
              <div
                className={styles.border}
                style={{ borderLeftColor: `${SITE_COLORS[item.siteId - 1]}` }}
              >
                {item.name}
              </div>
            </td>
            <td>{item.type}</td>
            <td className={statusClass(item.status)}>{item.status}</td>
            <td>{item.url && extractDomain(item.url)}</td>
            <td>
              {item.status === EStatus.DRAFT ? (
                <Button
                  onClick={() => navigate(`/finalize/${item.id}`)}
                  secondary
                >
                  Finalize
                </Button>
              ) : (
                <Button onClick={() => navigate(`/results/${item.id}`)}>
                  Results
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
