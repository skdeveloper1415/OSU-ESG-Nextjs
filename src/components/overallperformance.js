import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function OverallPerformance({data,label, yAxisData,yAxisStatus,yAxisLable, grid,barcolor,darkbarcolor}) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
const avhtat = {
    tooltip: { trigger: 'axis' },
    grid: grid,
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: { show: false },
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
    ],
    
    series: [
      {
        name: 'Cost',
        type: 'bar',
        barWidth: '80%',
        color: currentTheme === 'dark' ? darkbarcolor : barcolor,
        label: label,
        data:data ,
        itemStyle: {
          borderRadius: [0, 6, 6, 0],
      },
      }
    ]
  };
  return (
    <ReactEcharts
        option={avhtat}
        style={{ height: "100%", height: "200px" }}
        opts={{ renderer: 'svg' }}
     />
)
}