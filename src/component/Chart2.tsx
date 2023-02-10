import ReactECharts from "echarts-for-react";
import { alcoholCategory, avgOfMalicAcid } from "./logic";
import { FC } from "react";
import "../App.css";
const Chart2: FC = () => {
  let option = {
    title: {
      text: "Bar Chart for Alcohol category and Average of Malic Acid",
      textStyle: {
        color: "white",
        fontSize: 12,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },

    xAxis: {
      data: alcoholCategory,
      name: "Alcohol category",
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: "value",
      name: "Average of Malic Acid",
      textStyle: {
        color: "white",
        fontSize: 14,
      },
    },
    series: [
      {
        name: "Malic Acid",
        type: "bar",
        color: ["orange"],
        barWidth: "50%",
        data: avgOfMalicAcid,
      },
    ],
  };
  return (
    <>
      <div className="childs">
        <ReactECharts
          style={{ width: "90%", margin: "auto", height: "400px" }}
          option={option}
        ></ReactECharts>
      </div>
    </>
  );
};

export default Chart2;
