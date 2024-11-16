import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function RaceTrendLineChart({ data, grid,legend, xAxisLabeldata,name,linecolor,circlecolor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const options = {
        legend: legend,
        grid: grid,
        label:{
            borderType :'solid',
        },
        xAxis: {
            type: 'category',
            data: xAxisLabeldata,
            min: 0,
            minInterval: 1,
            max: 10,
            axisLine: {
                show: true,
                lineStyle: {
                  color: "#CFCCC3"
                }
              },
              axisLabel: {
                color: "#242526",
              },
              axisTick: {
                show: false
              }
        },
        yAxis: {
            type: "value",
            show: true,
            min: 0,
            minInterval: 25,
            max: 100,
            axisLabel: {
                color: "#242526",
                formatter: '{value}%',
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  color: "#E6E3D9",
                  width: 1
                }
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#CFCCC3"
                }
              },
        },
        series: [
            {
                name: name[0],
                data: data[0],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[0]
                },
                lineStyle: {
                    color: linecolor[0]
                },
                label: {
                    show: true,
                    color: currentTheme === 'dark' ? '#B3B9C6' : "#6C768B"
                }
            },
            {
                name: name[1],
                data: data[1],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[1]
                },
                lineStyle: {
                    color: linecolor[1]
                }
            },
            {
                name: name[2],
                data: data[2],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[2]
                },
                lineStyle: {
                    color: linecolor[2]
                }
            },
            {
                name: name[3],
                data: data[3],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[3]
                },
                lineStyle: {
                    color: linecolor[3]
                }
            },     {
                name: name[4],
                data: data[4],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[4]
                },
                lineStyle: {
                    color: linecolor[4]
                }
            },
            {
                name: name[5],
                data: data[5],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[5]
                },
                lineStyle: {
                    color: linecolor[5],
                    width: 3,
                    type: 'dashed',
                }
            },
            {
                name: name[6],
                data: data[6],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[6]
                },
                lineStyle: {
                    color: linecolor[6],
                }
            },     {
                name: name[7],
                data: data[7],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[7]
                },
                lineStyle: {
                    color: linecolor[7]
                }
            },
            {
                name: name[8],
                data: data[8],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[8]
                },
                lineStyle: {
                    color: linecolor[8]
                }
            },
            {
                name: name[9],
                data: data[9],
                type: 'line',
                symbol: "none",
                itemStyle: {
                    color: circlecolor[9]
                },
                lineStyle: {
                    color: linecolor[9]
                }
            }
            
        ]
    };
    return (
        <ReactEcharts
            option={options}
            style={{ height: "101%", width: "101%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}