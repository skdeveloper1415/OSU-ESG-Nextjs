import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function MigrationtrendLineChart({ data, grid,legend, xAxisLabeldata,name,linecolor,circlecolor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const options = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'category',
            data: xAxisLabeldata,
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
            minInterval: 10,
            max: 50,
            axisLabel: {
                color: "#242526",
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
        ]
    };
    return (
        <ReactEcharts
            option={options}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}