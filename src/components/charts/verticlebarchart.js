import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function VerticleBarChart({ data, label, legend, xAxisData, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, gradiantColor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const option = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'category',
            data: data.label,
            axisLine: {
                show: true,
                lineStyle: {
                    color: currentTheme === 'dark' ? '#2A2C32' : "#EAEDF3"
                }
            },
            axisLabel: {
                color: currentTheme === 'dark' ? '#FFFFFF' : "#363A44",
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
            type: 'value',
            interval: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#EAEDF3",
                }
            },
            axisLabel: {
                color: "#6C768B",
                show: false,
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
                color: gradiantColor,
                label: label,
                emphasis: {
                    focus: 'series'
                },
                data: data.value,
                itemStyle: {
                    borderRadius: [8, 8, 0, 0],
                },
            },

        ]
    };
    return (
        <ReactEcharts
            option={option}
            style={{ height: "110%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}