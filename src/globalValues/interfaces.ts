export interface ThemeColorsObj {
  [key: string]: string;
}

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
    isExtraBadVs: string[];
    isWeakTo: string[];
    isSafeFrom: string[];
    isExtraSafeFrom: string[];
  };
}
