import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";
import { useTheme } from "next-themes";

export const DrillDownChart = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const drillDownCharts = {
    series: [
      {
        type: "tree",
        symbol: "roundRect",
        emphasis: false,
        data: [
          {
            name: (() => {
              return "Actual \n 85%";
            })(),

            label: {
              show: true,
              position: "inside",
              color: "#242526",
              background: "#E4E2DD",
              fontSize: "16",
              fontWeight: "500",
              textAlign: "left",
              borderColor: "#9D2F0F",
              lineHeight: 20,
              emphasis: false,
              fontFamily:"Kanit",
            },

            symbolSize: 90,
            itemStyle: {
              color: "#E4E2DD",
              borderColor:"#9D2F0F",
              emphasis: false,
            },
            children: [
              {
                lineStyle: {
                  width: 20,
                  color: "#9D2F0F",
                },
                symbolSize: 80,
                label: {
                  show: true,
                  position: "inside",
                  background: "#E4E2DD",
                  fontSize: "16",
                  fontWeight: "500",
                  textAlign: "left",
                  lineHeight: 20,
                  color: "#242526",
                  fontFamily:"Kanit",
                },
                itemStyle: {
                  color: "#E4E2DD",
                  borderColor:"#9D2F0F",
                },
                name: "Female \n 53.6%",
                children: [
                  {
                    name: "Computer  \n science \n 22.74%",
                    lineStyle: {
                      width: 20,
                      color: "#9D2F0F",
                    },
                    symbolSize: 0,
                    label: {
                      show: true,
                      fontSize: "14",
                      position: "right",
                      fontFamily:"OpenSans",
                      lineHeight: 18,
                      color: currentTheme == "dark" ? "#fff" : "#363A44",
                    },
                  },
                  {
                    name: "Bio-Eng \n 1.8%",
                    lineStyle: {
                      width: 20,
                      color: "#9D2F0F",
                    },
                    symbolSize: 0,
                    label: {
                      show: true,
                      fontSize: "14",
                      position: "right",
                      lineHeight: 20,
                      fontFamily:"OpenSans",
                      color: currentTheme == "dark" ? "#fff" : "#363A44",
                    },
                  },
                  {
                    lineStyle: {
                      width: 20,
                      color: "#9D2F0F",
                    },
                    name: "Graduate School \n 57%",
                    label: {
                      show: true,
                      position: "inside",
                      background: "#E4E2DD",
                      fontSize: "16",
                      fontWeight: "500",
                      textAlign: "left",
                      lineHeight: 22,
                      color: "#242526",
                      fontFamily:"Kanit",
                    },
                    symbolSize: 120,
                    itemStyle: {
                      color: "#E4E2DD",
                      borderColor:"#9D2F0F",
                    },
                    collapsed: false,
                    children: [
                      {
                        name: "Hispanic \n 75%",
                        lineStyle: {
                          width: 20,
                          color: "#9D2F0F",
                        },
                        label: {
                          show: true,
                          position: "right",
                          fontSize: "14",
                          lineHeight: 22,
                          fontFamily:"OpenSans",
                          color: currentTheme == "dark" ? "#fff" : "#363A44",
                        },
                      },
                      {
                        name: "Asian Race \n 52%",
                        lineStyle: {
                          width: 20,
                          color: "#9D2F0F",
                        },
                        symbolSize: 0,
                        label: {
                          show: true,
                          position: "right",
                          fontSize: "14",
                          lineHeight: 22,
                          fontFamily:"OpenSans",
                          color: currentTheme == "dark" ? "#fff" : "#363A44",
                        },
                      },
                      {
                        name: "Two or More \n 56%",
                        lineStyle: {
                          width: 20,
                          color: "#EF5007",
                        },
                        symbolSize: 0,
                        label: {
                          show: true,
                          position: "right",
                          fontSize: "14",
                          lineHeight: 22,
                          fontFamily:"OpenSans",
                          color: currentTheme == "dark" ? "#fff" : "#363A44",
                        },
                      },
                      {
                        name: "Others \n 61%",
                        lineStyle: {
                          width: 20,
                          color: "#EF5007",
                        },
                        symbolSize: 0,
                        label: {
                          show: true,
                          position: "right",
                          fontSize: "14",
                          lineHeight: 22,
                          fontFamily:"OpenSans",
                          color: currentTheme == "dark" ? "#fff" : "#363A44",
                        },
                      },
                    ],
                    lineStyle: {
                      width: 20,
                      color: "#9D2F0F",
                    },
                  },
                  {
                    name: "Elec & comp Science \n 14.58%",
                    lineStyle: {
                      width: 20,
                      color: "#EF5007",
                    },
                    symbolSize: 0,
                    label: {
                      show: true,
                      position: "right",
                      fontSize: "14",
                      lineHeight: 20,
                      fontFamily:"OpenSans",
                      color: currentTheme == "dark" ? "#fff" : "#363A44",
                    },
                  },
                  {
                    name: "Civil Eng \n 12.38%",
                    lineStyle: {
                      width: 20,
                      color: "#EF5007",
                    },
                    symbolSize: 0,
                    label: {
                      show: true,
                      position: "right",
                      fontSize: "14",
                      lineHeight: 20,
                      fontFamily:"OpenSans",
                      color: currentTheme == "dark" ? "#fff" : "#363A44",
                    },
                  },
                  {
                    name: "Business \n 64%",
                    lineStyle: {
                      width: 20,
                      color: "#FFD4A8",
                    },
                    symbolSize: 0,
                    label: {
                      show: true,
                      position: "right",
                      fontSize: "14",
                      lineHeight: 20,
                      fontFamily:"OpenSans",
                      color: currentTheme == "dark" ? "#fff" : "#363A44",
                    },
                  },
                  {
                    name: "Others \n 95%",
                    lineStyle: {
                      width: 20,
                      color: "#FFD4A8",
                    },
                    symbolSize: 0,
                    label: {
                      show: true,
                      fontSize: "14",
                      position: "right",
                      lineHeight: 20,
                      fontFamily:"OpenSans",
                      color: currentTheme == "dark" ? "#fff" : "#363A44",
                    },
                  },
                ],
              },
              {
                name: (() => {
                  return "Male \n 46.32%";
                })(),
                lineStyle: {
                  width: 20,
                  color: "#FE6B11",
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  fontSize: "14",
                  fontWeight: "500",
                  lineHeight: 20,
                  fontFamily:"OpenSans",
                  color: currentTheme == "dark" ? "#fff" : "#53565A",
                },
              },
            ],
          },
        ],
        itemStyle: {
          emphasis: {
            emphasis: false,
          },
        },
        label: {
          position: "right",
          color: "#fff",
          lineHeight: 15,
          color: currentTheme == "dark" ? "#fff" : "#363A44",
        },
        lineStyle: {
          width: 30,
          color: "#fff",
        },
        //   symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIKSURBVHgB7da9TUMxFEDhe11AywjZgIyQSBR0MAqZAJggsAl0FEhkhGxARqAFpGfsF0ARLJAcna/y++mOru2Mv5Zns5LlokZcZsQktPdaq3VGrof6fhuL1Wb3W/6ulrOTkkfXbXUVOmB59x36bXwa323jvrTVNHTw+kTX+jHvkUt/8T25xoVoUzsteXy9XS9nkxb4NYQz1GFefkqLp0Reti26ujVTZV70M9jAXJMSQjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBobrgTchpBqxLlHrYwgpI9dliPoQQhpq3pZYPK/aFN+HWHrTxdNmvGQN8XnT9+sQQm/Zm/b19ha9WL3V+jF3kgFaw7Fla9of898Py/NJieGmZpy2j9PQ3msTu8l2WR7vU/3I3fEFO3Nf7zpxuL0AAAAASUVORK5CYII=",

        height: "90%",
        top: "-25",
        left: "60",
        bottom: "-20%",

        on: {
          click: function (params) {
            var node = params.data;
            if (node.symbolSize === 0) {
              node.symbolSize = 70;
              if (node.children) {
                node.children.forEach(function (child) {
                  child.symbolSize = 70;
                });
              }
            } else {
              node.symbolSize = 0;
              if (node.children) {
                node.children.forEach(function (child) {
                  child.symbolSize = 0;
                });
              }
            }
            myChart.setOption(option);
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactEcharts
        option={drillDownCharts}
        style={{ width: "100%", height: "800px" }}
      />
    </div>
  );
};
