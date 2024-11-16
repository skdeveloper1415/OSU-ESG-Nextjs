import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function Landinghorizontalbarchart({ data, label, legend, xAxisData, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, gradiantColor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const option = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'value',
            data: data.label,
            min: 0,
            max: 4000,
            axisLine: {
                show: false,
                lineStyle: {
                    color: currentTheme === 'dark' ? '#2A2C32' : "#EAEDF3"
                }
            },
            axisLabel: {
                show: false,
                color: currentTheme === 'dark' ? '#FFFFFF' : "#53565A",
                fontSize: 9,
                interval: 0
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            interval: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#EAEDF3",
                }
            },
            data: data.label,
            axisLabel: {
                color: "#53565A",
                show: true,
                lineHeight: 16,
                width: 70,
                fontSize:9.5,
                overflow: "breakAll"
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(219, 212, 212, 1)"
                }
            }
        },
        series: [
            {
                name: 'Clean',
                type: 'bar',
                stack: 'total',
                color: '#FF8C38',
                barWidth: "80%",
                showBackground: true,
                backgroundStyle: {
                color: '#ECECEC',
                borderRadius: [0, 5, 5, 0]
                },
                label: label,
                emphasis: {
                    focus: 'series'
                },
                data: data.value,
                itemStyle: {
                    borderRadius: [0, 5, 5, 0],
                },
            },

        ]
    };
    return (
        <ReactEcharts
            option={option}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}