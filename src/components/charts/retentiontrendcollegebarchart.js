import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "next-themes";

export default function RetentionTrendCollegeBarChart({
  data,
  label,
  legend,
  xAxisData,
  yAxisData,
  yAxisStatus,
  yAxisLable,
  barData1,
  barData2,
  grid,
  barcolor1,
  barcolor2,
  title,
  name,
  gradiantColor,
}) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const option = {
    legend: legend,
    grid: grid,
    title: title,
    xAxis: {
      type: "category",
      data: xAxisData,
      axisTick: {
        show: false
    },
    },
    yAxis: {
      type: "value",
    },
    legend: {
      bottom: "0%",
      left: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "#53565A",
        fontSize: 10,
      },
    },
    series: [
      {
        name: name[0],
        data: barData1,
        type: "bar",
        color: barcolor1,
        label: {
          show: true,
          position:'insideTop',
        },
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        name: name[1],
        data: barData2,
        type: "bar",
        color: barcolor2,
        label: {
          show: true,
          position:'insideTop',
        },
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: "101%", width: "101%" }}
      opts={{ renderer: "svg" }}
    />
  );
}
