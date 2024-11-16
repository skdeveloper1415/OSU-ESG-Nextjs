import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function RetentionBarChart({ data, grid,legend, xAxisLabeldata,name,maxvalue,minvalue,intervalvalue, barcolor }) {

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
                interval: 0,
                fontSize: 9
              },
              axisTick: {
                show: false
              }
        },
        yAxis: {
            type: "value",
            show: true,
            data: data.label,
            min:minvalue,
            interval:intervalvalue,
            max:maxvalue,
            axisLabel: {
                color: "#242526",
                formatter: '{value}',
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
                type: 'bar',
                stack: 'total',
                color: barcolor,
                label: {
                  show: true,
                  formatter: '{c}',
                  position:'insideTop',
                  color: "#fff"
                },
                emphasis: {
                    focus: 'series'
                },
                data: data,
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