import EChartsReact from "echarts-for-react";
import getData from "./logic";
import { FC } from "react";
import "../App.css";
const Chart1: FC = () => {
  let option = {
    dataset: [
      {
        source: getData(),
      },
    ],
    title: {
      text: "Scatter plot for Color intensity and Hue",
      textStyle: {
        color: "white",
        fontSize: 12,
      },
    },
    legend: {
      bottom: 5,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      name: "Color intensity",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      name: "Hue",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    style: {},
    series: [
      {
        type: "scatter",
      },
    ],
  };
  return (
    <>
      <div className="childs">
        <EChartsReact
          style={{ width: "90%", margin: "auto" }}
          option={option}
        />
      </div>
    </>
  );
};

export default Chart1;
