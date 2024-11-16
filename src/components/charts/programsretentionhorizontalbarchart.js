import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function ProgramsRetentionhorizontalbarchart({ data, label, legend, minv, maxv, xAxisData, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, gradiantColor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const option = {
        legend: legend,
        grid: grid,
        xAxis: {
         
            type: 'value',
            data: data.label,
            min: minv,
            max: maxv,
            axisLine: {
                show: false,
                lineStyle: {
                    color: currentTheme === 'dark' ? '#2A2C32' : "#EAEDF3"
                }
            },
            axisLabel: {
                show: false,
                color: currentTheme === 'dark' ? '#FFFFFF' : "#53565A",
                fontSize: 8,
                interval: 0
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: [
            {
            type: 'category',
            interval: 8,
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
                fontSize:10,
                lineHeight: 16,
                width: 70,
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
        {
            type: 'category',
            data: ['75','75','75','75','75',],
            axisLabel: {
              color: "#53565A",
              formatter: '{value} %',
              show: true,
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true
            }
            }
        ],
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