import data from '../globalValues/pogoTypeEffectiveness.json';
import { PogoTypesJSON, LookupObj } from './interfaces';
/* prettier-ignore */
export const typesArr = [ 'bug', 'dark', 'dragon', 'electric', 'fire', 'fairy', 'fighting', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water' ];
export const typeColors = {
  bug: '#92bc2c',
  dark: '#595761',
  dragon: '#0c69c8',
  electric: '#f2d94e',
  fire: '#fba54c',
  fairy: '#ee90e6',
  fighting: '#d3425f',
  flying: '#a1bbec',
  ghost: '#5f6dbc',
  grass: '#5fbd58',
  ground: '#da7c4d',
  ice: '#75d0c1',
  normal: '#a0a29f',
  poison: '#b763cf',
  psychic: '#fa8581',
  rock: '#c9bb8a',
  steel: '#5695a3',
  water: '#539ddf',
};

function createDataLookup() {
  const rawData: PogoTypesJSON = data;
  const lookupObj: LookupObj = {};

  for (const baseType in rawData) {
    const pogoType = rawData[baseType];

    for (let comparedType in pogoType) {
      if (!lookupObj[baseType]) {
        lookupObj[baseType] = {
          isGoodVs: [],
          isBadVs: [],
          isWeakTo: [],
          isSafeFrom: [],
        };
      }
      if (!lookupObj[comparedType]) {
        lookupObj[comparedType] = {
          isGoodVs: [],
          isBadVs: [],
          isWeakTo: [],
          isSafeFrom: [],
        };
      }

      const val = parseFloat(pogoType[comparedType]);
      if (val > 1) {
        lookupObj[baseType].isGoodVs.push(comparedType);
        lookupObj[comparedType].isWeakTo.push(baseType);
      }
      if (val < 1) {
        lookupObj[baseType].isBadVs.push(comparedType);
        lookupObj[comparedType].isSafeFrom.push(baseType);
      }
    }
  }
  return lookupObj;
}

export const lookupObj = createDataLookup();
