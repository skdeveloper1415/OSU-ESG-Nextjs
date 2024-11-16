import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function HorizontalBarChart({ data, label, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, darkbarcolor }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const isabyservice = {
    tooltip: { trigger: 'axis' },
    grid: grid,
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: { show: false },
      min: 0,
      max: 90,
    },
    yAxis: [
      {
        type: 'category',
        axisLine: { show: false },
        axisLabel: yAxisLable,
        axisTick: { show: false },
        inverse: true,
        splitLine: { show: false },
        data: yAxisData,

      },
      {
        type: "category",
        axisLine: { show: false },
        axisLabel: {
          show: true,
          color: currentTheme == "dark" ? "#B3B9C6" : "#6C768B",
          fontSize: 10,
          backgroundColor: currentTheme == "dark" ? "#224525" : "#E3F5E3",
          padding: 4,
          borderRadius: 4,
          fontWeight: 500,
          formatter: function (params) { return `{icon|} + 2%`; },
          rich: {
            icon: {
              backgroundColor: { image: "/assets/images/svg/up-stock-arrow.svg" },
              width: 15, height: 10,
            },
          },
        },
        axisTick: { show: false },
        inverse: true,
        splitLine: { show: false },
        data: yAxisStatus,
      }
    ],

    series: [
      {
        name: 'Cost',
        type: 'bar',
        barWidth: '80%',
        color: currentTheme === 'dark' ? darkbarcolor : barcolor,
        label: label,
        data: data,
        itemStyle: {
          borderRadius: [0, 2, 2, 0],
        },
      }
    ]
  };
  return (
    <ReactEcharts
      option={isabyservice}
      style={{ height: "100%", width: "100%" }}
      opts={{ renderer: 'svg' }}
    />
  )
}