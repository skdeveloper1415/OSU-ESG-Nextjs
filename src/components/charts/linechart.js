import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useTheme } from "next-themes";


export default function LineChart({
    data, grid,legend, xAxisLabeldata,name,linecolor,circlecolor }) {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const options = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'category',
            data: xAxisLabeldata,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: currentTheme === 'dark' ? '#2A2C32' : '#EAEDF3'
                }
            },
            axisLabel: {
                show: true,
                color: currentTheme === 'dark' ? '#FFFFFF' : '#363A44'
            }
        },
        yAxis: {
            type: "value",
            show: false,
            interval: 0,
        },
        series: [
            {
                name: name[0],
                data: data[0],
                type: 'line',
                smooth: true,
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
                showSymbol: false,
                itemStyle: {
                    color: circlecolor[1]
                },
                lineStyle: {
                    color: linecolor[1]
                }
            }
        ]
    };

    return (

        <ReactEcharts
            echarts={echarts}
            option={options}
            opts={{ renderer: 'svg' }}
            style={{ width: '100%', height: '250px' }}
        />
    )


};

