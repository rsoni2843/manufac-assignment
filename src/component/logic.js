import data from "../db.json";

// Separating the array on the basis of alcohol category
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    // console.log(acc);
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);
    return acc;
  }, {});
}
const arrData = groupBy(data, "Alcohol");
// console.log(arrData);

export let alcoholCategory = [];
export let avgOfMalicAcid = [];
// After separating finding average here and all the categories of array using key and value pairs
for (let key in arrData) {
  let sum = 0;
  for (let a = 0; a < arrData[key].length; a++) {
    // console.log(arrData[key][a]["Malic Acid"])
    sum += Number(arrData[key][a]["Malic Acid"]);
  }
  alcoholCategory.push(key);
  avgOfMalicAcid.push((sum / arrData[key].length).toFixed(2));
  // Not done Math.floor because not written in question
}

// console.log(data) ;
export default function getData() {
  let arr = [];
  for (let a = 0; a < data.length; a++) {
    arr.push([data[a]["Color intensity"], data[a].Hue]);
  }
  return arr;
}
