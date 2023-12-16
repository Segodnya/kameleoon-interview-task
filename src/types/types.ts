export enum EType {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

export enum EStatus {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface ISite {
  id: number;
  url: string;
}

export interface ITest {
  id: number;
  name: string;
  type: EType;
  status: EStatus;
  siteId: number;
}

export interface IData {
  id: number;
  name: string;
  type: EType;
  status: EStatus;
  siteId: number;
  url?: string;
}

export interface ISortConfig {
  key: string;
  direction: "ascending" | "descending" | "";
}
