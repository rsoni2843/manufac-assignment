// import * as echarts from "echarts";
import EChartsReact from "echarts-for-react";
import { alcoholCategory, avgOfMalicAcid } from "./logic";
// import getData from "./logic";
// import data from "../db.json";
import React, { FC } from "react";
import "../App.css";
const Charts: FC = () => {
  //   console.log((getData()));
  //   function getData() {
  //     for(let a=0  ;a<data.length ; a++){
  //         return data[a]
  //     }
  //   }
  // console.log(data);
  console.log(alcoholCategory);
  let option = {
    title: {
      text: "ECharts Getting Started Example",
    },
    tooltip: {},
    xAxis: {
      data: alcoholCategory,
    },
    yAxis: {},
    series: [
      {
        name: "sales",
        type: "bar",
        data: avgOfMalicAcid,
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="childs">
          <EChartsReact option={option} />
        </div>
        <div className="childs"></div>
      </div>
    </>
  );
};

export default Charts;
