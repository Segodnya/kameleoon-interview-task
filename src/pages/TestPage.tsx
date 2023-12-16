import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTestById } from "../api/api";
import { ITest } from "../types/types";

export function TestPage() {
  const [isFetching, setIsFetching] = useState(true);
  const [testName, setTestName] = useState("");
  const { testId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        if (testId) {
          const fetchedTestData = await fetchTestById(testId);
          if (fetchedTestData) {
            const { name } = fetchedTestData as ITest;
            setTestName(name);
          }
        }
      } catch (error) {
        console.log("Error fetching test data:", error);
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [testId]);

  return <main>{isFetching ? <p>Loading...</p> : <p>{testName}</p>}</main>;
}
