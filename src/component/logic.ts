import data from "../db.json";

let alchoholCategory = [];

interface Data {
  Alchohol: number;
  "Malic Type": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: 2.8;
  "Nonflavanoid phenols": number;
  Proanthocyanins: number;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": number;
  Unknown: number;
}
// console.log(getData());
// export default function getData() {
//   //   let obj: any = {};
//   //   for (let a = 0; a < data.length; a++) {
//   //     let x: any = data[a];
//   //     if (obj[x] === undefined) {
//   //       obj[x] = 1;
//   //     } else {
//   //       obj[x]++;
//   //     }
//   //   }
//   //   for(let key in obj){
//   //     return obj[key]
//   //   }
// }
function groupBy(objectArray: any, property: any) {
  return objectArray.reduce((acc: any, obj: any) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
}
const people = groupBy(data, "Alcohol");
// console.log(people);

export let alcoholCategory: any = [];
export let avgOfMalicAcid: any = [];
for (let key in people) {
  let sum = 0;
  for (let a = 0; a < people[key].length; a++) {
    // console.log(people[key][a]["Malic Acid"])
    sum += Number(people[key][a]["Malic Acid"]);
  }
  //   arr.push([key], [sum]);
  alcoholCategory.push("Alcohol Category-" + key);
  avgOfMalicAcid.push(sum);
  //   console.log(key, sum);
}
