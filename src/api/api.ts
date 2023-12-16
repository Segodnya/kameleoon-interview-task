import axios from "axios";
import { IData, ISite } from "../types/types";

const BASE_URL = "http://localhost:3100";

async function fetchData(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Error fetching data from ${url}:`, error);
    return [];
  }
}

export async function fetchTestData() {
  return fetchData(`${BASE_URL}/tests`) as Promise<IData[]>;
}

export async function fetchSiteData() {
  return fetchData(`${BASE_URL}/sites`) as Promise<ISite[]>;
}

export async function fetchTestById(testId: string) {
  return fetchData(`${BASE_URL}/tests/${testId}`);
}
