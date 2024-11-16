import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function DFWcreditsbarlineChart({ data, grid,legend, xAxisLabeldata,name,linecolor,circlecolor, barcolor }) {

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
            data: data.label,
            min: 0,
            minInterval: 20,
            max: 80,
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
                type: 'bar',
                stack: 'total',
                color: barcolor,
                barWidth: "50%",
                label: {
                  show: true,
                  formatter: '{c}%',
                  position:'insideTop',
                  color: "#fff"
                },
                emphasis: {
                    focus: 'series'
                },
                data: data[1],
                itemStyle: {
                    borderRadius: [5, 5, 0, 0],
                },
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