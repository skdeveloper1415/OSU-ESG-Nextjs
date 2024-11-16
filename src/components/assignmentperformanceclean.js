import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";
import { useTheme } from "next-themes";

export const AssignmentPerformanceClean = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const AssignmentPerformanceClean = {
    color: ["#4FB155", "#1570EF"],
    legend: {
      show: false,
      orient: "horizontal",
      width: "100%",
      itemGap: 50,
      bottom: "10%",
      itemWidth: 20,
      itemHeight: 20,
      textStyle: {
        fontSize: 16,

        color: currentTheme == "light" ? "#363A44" : "#fff",
      },
    },
  

    series: [
      {
        name: "In Process",
        type: "pie",
        radius: ["40%", "60%"],
        center: ["49%", "55%"],
        width: "100%",
        height: "100%",
        data: [
          { value: 20, name: "In Process" },
          { value: 137, name: "Complete" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: true,

          color: currentTheme == "light" ? "#363A44" : "#fff",
          alignTo: "labelLine",
          Fontweight:600,
          bleedMargin: 10,
          fontSize: 14,
          backgroundColor:currentTheme == "light" ? "#F2F4F7" : "#0B0B0E",
          padding: [10, 10, 10, 10],
          borderRadius: [4, 4, 4, 4],
          length: 30,

          position: "outer",
         
          
        },
        labelLine: {
          length: 15,
          length2: 15,
          type: "solid",
          width: 1,
          lineStyle: {
            color: "#CDD3DE"
          },
     
          
           label: {
            alignTo: 'edge',
              
            minMargin: 5,
            edgeDistance: 30,
            lineHeight: 15,
        rich: {
          time: {
            fontSize: 10,
            color: '#999'
          }
        }
      },
        },
        itemStyle: {
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 1.5,
        },
      },
    ],
  };

  return (
    <ReactEcharts
      option={AssignmentPerformanceClean}
      style={{ height: "100%", height: "260px" }}
    />
  );
};
