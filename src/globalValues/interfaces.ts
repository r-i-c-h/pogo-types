// export interface FullSet {
//   [key: string]: RulesSet;
// }

export interface PogoTypeData {
  [key: string]: string;
}
export interface PogoTypesJSON {
  [key: string]: PogoTypeData;
}

export interface LookupObj {
  [key: string]: {
    isGoodVs: string[];
    isBadVs: string[];
    isWeakTo: string[];
    isSafeFrom: string[];
  };
}
