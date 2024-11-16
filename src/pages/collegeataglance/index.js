import React, { useState, useRef, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { graphic } from "echarts";
import FilterComponent from "@/components/filtercomponent";
import Layout from "@/components/layout/layout";
import { useTheme } from "next-themes";
import ChartWrapper from "@/components/chartwrapper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { OverlayPanel } from "primereact/overlaypanel";
import { RadioButton } from "primereact/radiobutton";
import { ScrollPanel } from "primereact/scrollpanel";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import RetentionTrendLineChart from "@/components/charts/retentiontrend";
import MigrationtrendLineChart from "@/components/charts/migrationtrendlinechart";
import GraduationtrendLineChart from "@/components/charts/graduationtrendlinechart";
import DFWcreditsbarlineChart from "@/components/charts/dfwcreditsbarlinechart";
import RetentionTrendCollegeBarChart from "@/components/charts/retentiontrendcollegebarchart";
import RetentionbyResidencyLineChart from "@/components/charts/retentionbyresidencylinechart";
import RaceTrendLineChart from "@/components/charts/racetrendlinechart";
import Landinghorizontalbarchart from "@/components/charts/landinghorizontalbarchart";
import RetentionBarChart from "@/components/charts/retentionbarchart";
import ProgramsRetentionhorizontalbarchart from "@/components/charts/programsretentionhorizontalbarchart";

export default function Index() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [visibleRight, setVisibleRight] = useState(false);
  const [loadHighlighChart, setLoadHighlighChart] = useState(false);
  const [selectedRetention, setSelectedRetention] = useState(null);

  /* Load Highlight chart when popup enabled */
  useEffect(()=>{
    const timeoutId = setTimeout(() => {
      setLoadHighlighChart(visibleRight);
    }, 400);
    // Clear the timeout if the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };

  },[visibleRight]);

  const Retention = [
    { name: "1Y Retention", code: "N1Y" },
    { name: "2Y Retention", code: "RM" },
    { name: "3Y Retention", code: "LDN" },
  ];

  

  const RetentioBarChartData = [
    {
      value: 850,
      itemStyle: {
        color: '#FFD4A8',
        
      },
      label: {
        color:'#242526'
      }
    },
    {
      value: 350,
      itemStyle: {
        color: '#FF8C38'
      }
    },
    {
      value: 380,
      itemStyle: {
        color: '#FE6B11'
      }
    },
    {
      value: 400,
      itemStyle: {
        color: '#D73F09'
      }
    }, 
    {
      value: 200,
      itemStyle: {
        color: '#7E2910'
      }
    }
      
  ]

  const MigrationBarChartData = [
    {
      value: 48,
      itemStyle: {
        color: '#FCE38B',
        
      },
      label: {
        color:'#242526'
      }
    },
    {
      value: 18,
      itemStyle: {
        color: '#F8B720'
      }
    },
    {
      value: 16,
      itemStyle: {
        color: '#B24F0B'
      }
    },
    {
      value: 10,
      itemStyle: {
        color: '#773310'
      }
    }, 
    {
      value: 12,
      itemStyle: {
        color: '#773310'
      }
    }
      
  ]
  const GraduationBarChartData = [
    {
      value: 48,
      itemStyle: {
        color: '#C7DCF6',
        
      },
      label: {
        color:'#242526'
      }
    },
    {
      value: 26,
      itemStyle: {
        color: '#5287DF'
      }
    },
    {
      value: 40,
      itemStyle: {
        color: '#3459C1'
      }
    },
    {
      value: 10,
      itemStyle: {
        color: '#2B407D'
      }
    }, 
    {
      value: 15,
      itemStyle: {
        color: '#1E294D'
      }
    }
      
  ]

  const ProgramsHMigrationBarChartData = {
    label: [
    '-',
    '-',
    '-',
    'Mechanical Engineering',
    'Computer',],
  value:    
    [
      {
        value: 12,
        itemStyle: {
          color: '#773310'
        }
      },
      {
        value: 5,
        itemStyle: {
          color: '#B24F0B'
        }
      }, 
      {
        value: 16,
        itemStyle: {
          color: '#D67309'
        }
      },
      {
        value: 18,
        itemStyle: {
          color: '#FCE38B'
        },
        label: {
          color:'#242526'
        }
      },

    {
      value: 20,
      itemStyle: {
        color: '#F8B720',
        
      },
    
    },
  
   
   
   
      
  ]}
  const ProgramsHGraduationBarChartData = {
    label: [
    'Chemical Engineering',
    'Electrical and Computer Engineering',
    'Civil Engineering',
    'Computer Science',
    'Mechnical Engineering',],
  value:    
    [
      {
        value: 12,
        itemStyle: {
          color: '#2B407D'
        }
      },
      {
        value: 5,
        itemStyle: {
          color: '#324DA6'
        }
      }, 
      {
        value: 16,
        itemStyle: {
          color: '#3D6CD3'
        }
      },
     

    {
      value: 20,
      itemStyle: {
        color: '#73A7E7',
        
      },
    
    },
    {
      value: 22,
      itemStyle: {
        color: '#DFEBFA'
      },
      label: {
        color:'#242526'
      }
    },
  
   
   
   
      
  ]}
  const ProgramsLGraduationBarChartData = {
    label: [
    'Nuculear Engineering',
    'Environmental engineering',
    'Architectural Engineering',
    'Radiation Health Physics',
    'Manuafacturing engineering',],
  value:    
    [
      {
        value: 30,
        itemStyle: {
          color: '#2B407D'
        }
      },
      {
        value: 5,
        itemStyle: {
          color: '#324DA6'
        }
      }, 
      {
        value: 3,
        itemStyle: {
          color: '#3D6CD3'
        }
      },
     

    {
      value: 11,
      itemStyle: {
        color: '#73A7E7',
        
      },
    
    },
    {
      value: 3,
      itemStyle: {
        color: '#DFEBFA'
      },
      label: {
        color:'#242526'
      }
    },
        
  ]}
  

  const ProgramsLMigrationBarChartData = {
    label: [
    '-',
    '-',
    '-',
    'Electrical and Computer e...',
    'Civil Engineering',],
  value:    
    [
      {
        value: 12,
        itemStyle: {
          color: '#773310'
        }
      },
      {
        value: 5,
        itemStyle: {
          color: '#B24F0B'
        }
      }, 
      {
        value: 16,
        itemStyle: {
          color: '#D67309'
        }
      },
    

    {
      value: 20,
      itemStyle: {
        color: '#F8B720',
        
      },
    
    },
    {
      value: 18,
      itemStyle: {
        color: '#FCE38B'
      },
      label: {
        color:'#242526'
      }
    },
  
   
   
   
      
  ]}
  /*********** bullet Chart  *************/
  let defaultGrid = {
    top: "3%",
    left: 0,
    right: "35",
    bottom: "0%",
    height : 20,
    containLabel: false,
  };

  const chartConfig = {
    animation: false,
    grid: defaultGrid,
    color: [],
    yAxis: {
      type: "category",
      data: [""],
      zlevel: 9,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        inside: true,
        color: "white",
  
      },
      show: true,
    },
    xAxis: {
      type: "value",
      show: false,
      // inverse: Math.sign(data.totalValue) === 1 ? false : true,
      // min:data.totalValue,
      // max:data.totalValue,
      // interval:data.totalValue
    },
    tooltip: {
      show: true,
      trigger: "item",
      //   formatter: function (params) {

      //     return `${params.marker} ${chartName} <br />
      //     ${data.value}`;
      //  },

      textStyle: {
        color: "var(--is-text)",
       
      },
    },
    series: [
      {
        data: [300],
        type: "bar",
        label: {
          normal: {
            show: true,
            fontSize: 12,
            color: "#242526",
            fontWeight: "medium",
            position: "right",
            formatter: "75%",
          
          },
          emphasis: {
            show: true,
            fontSize: 12,
          },
        },
        itemStyle: {
          borderRadius: 150,
          color: (params) => {
            return {
              type: "linear",
              x: 0,
              y: 1,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "red", // color at 0%
                },
                {
                  offset: 0.5,
                  color: "yellow", // color at 100%
                },
                {
                  offset: 1,
                  color: "green", // color at 100%
                },
              ],
              // global: false // default is false
            };
          },
        },
        markLine: {
          symbol: ["none", "none"],
          lineStyle: {
            color: "#53565A",
            width: 2,
            show: false,
            type: "solid"
          },
        
          label: {
            show: true,
            position: "end",
            color: "#53565A",
            fontWeight: "bold",
            zlevel: 5000,

            formatter: (params) => {
              //  return params.data.value
            },
          },
          data: [
            {
              name: "Value",
              xAxis: 220,
            },
          ],
        },
      },
    ],
  };
  /*********** bullet Chart  *************/
  // Programs - High 1Y Retention (2022) 
  const ProgramsretentiontData = {
    label: ['Chemical Engineering',
    'Civil Engineering',
    'Electrical and computer Engineering',
    'Mechanical Engineering',
    'Computer Science',],
    value: [       
      {
        value: 57,
          itemStyle: {
          color: '#EF5007'
          }
        },
        {
        value: 60,
          itemStyle: {
          color: '#9D2F0F'
          }
        },
        {
        value: 101,
          itemStyle: {
          color: '#EF5007'
          }
        },
        {
        value: 245,
          itemStyle: {
          color: '#FF8C38'
          }
        },
        {
        value: 324,
          itemStyle: {
          color: '#FFD4A8'
          },
          label: {
            color:'#000'
          }
        },
    ]
  }
    // Programs - Low 1Y Retention (2022)
    const ProgramsretentiontData1 = {
      label: ['Chemical Engineering',
      'Civil Engineering',
      'Electrical and computer Engineering',
      'Mechanical Engineering',
      'Computer Science',],
      value: [       
        {
          value: 57,
            itemStyle: {
            color: '#FE6B11'
            }
          },
          {
          value: 60,
            itemStyle: {
            color: '#9D2F0F'
            }
          },
          {
          value: 101,
            itemStyle: {
            color: '#FE6B11'
            }
          },
          {
          value: 245,
            itemStyle: {
            color: '#FF8C38'
            }
          },
          {
          value: 324,
            itemStyle: {
            color: '#FFD4A8'
            },
            label: {
              color:'#000'
            }
          },
      ]
    }

  

  return (
    <>
      <Layout pageTitle="College At a Glance">
        <FilterComponent bgcolor="#4FB155" />
        <Tabs className={'custmtabview'}>
        <div className="flex justify-end pt-5">
        <TabList>
        <Tab>Count</Tab>
        <Tab>Percentage</Tab>
        </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[1.67vw] mb-[32px] xl:mb-[2.09vw] my-[20px] xl:my-[1.083vw]">
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"1Y Retention (2022)"}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8 ">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          105090
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            28%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw] ">
                      1Y Retention trend - College of Engineering
                    </div>

                    <div className="xl:h-[14.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <RetentionTrendLineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "0%",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 8,
                          },
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "25%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#FF8C38", "#7E2910", "#D73F09", "#F8B720"]}
                        circlecolor={[
                          "#FF8C38",
                          "#7E2910",
                          "#D73F09",
                          "#F8B720",
                        ]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={[
                          "1Y Retention %",
                          "2Y Retention %",
                          "3Y Retention %",
                          "4Y %",
                        ]}
                        data={[
                          [26, 55, 74, 100],
                          [75, 60, 55, 85],
                          [55, 74, 80, 90],
                          [60, 75, 55, 75],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"1Y Student Migration(2022) "}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          2318
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            26%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw]">
                      1Y migration trend - College of Engineering
                    </div>

                    <div className="xl:h-[14.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <MigrationtrendLineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "0",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 9,
                          },
                          itemGap: 20,
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "25%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        circlecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={["Under Grad", "Grad", "Post Grad"]}
                        data={[
                          [18, 22, 30, 25],
                          [30, 40, 30, 38],
                          [38, 42, 35, 30],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"6Y Graduation Rate(2022) "}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          79370
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            23%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw]">
                      1Y migration trend - College of Engineering
                    </div>

                    <div className="xl:h-[14.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <GraduationtrendLineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "0",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 9,
                          },
                          itemGap: 20,
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "25%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        circlecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={["Under Grad", "Grad", "Post Grad"]}
                        data={[
                          [18, 10, 30, 25],
                          [30, 40, 40, 38],
                          [38, 20, 35, 30],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"DFW(2022)"}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                        
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          325184
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            28%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw]">
                      DFW credits & dFW rate
                    </div>

                    <div className="xl:h-[14.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <DFWcreditsbarlineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "0",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 9,
                          },
                          itemGap: 20,
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "25%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#D73F09"]}
                        barcolor={["#5287DF"]}
                        circlecolor={["#D73F09"]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={["DFW Rate", "DFW Credits"]}
                        data={[
                          [40, 22, 30, 25],
                          [40, 41, 48, 49, 50],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          {/* Retention Insights start */}
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                    Retention Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                  Students 1Y Retention (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                            425,13.18%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                          3223,86.50%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                            32,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                          College of Engineering:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            122,11.61%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                          1050,90.28%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            11,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                      Majors - High 1Y retention (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={250}
                        maxvalue={1000}
                        data={RetentioBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                      Programs - High 1Y Retention (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "5%",
                      bottom: "0%",
                      left: "5%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={324}
                    data={ProgramsretentiontData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                      Programs - Low 1Y Retention (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "5%",
                      bottom: "0%",
                      left: "5%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={324}
                    data={ProgramsretentiontData1}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Retention Insights end */}

                     {/* Migration  Insights start */}
           <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                  Migration  Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                Students 1Y Migration (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                        502,20.24%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        2480,69.91% 
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                          12,0.48%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                          College of Engineering:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            122,11.61%
                          </h4>
                        </div>  
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        793,70.23%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            11,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                        Majors - High 1Y Migration (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={25}
                        maxvalue={50}
                        data={MigrationBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - High 1Y Migration (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsHMigrationBarChartData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - Low 1Y Migration (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsLMigrationBarChartData}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Migration  Insights end */}





          {/* Graduation  Insights start */}
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                     Graduation  Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Students 6Y Graduation (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                        502,20.24%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        2480,69.91%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                          12,0.48%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                          College of Engineering:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            122,11.61%
                          </h4>
                        </div>  
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        793,70.23%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            11,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Majors - High 6Y Graduation (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={25}
                        maxvalue={50}
                        data={GraduationBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - High 6Y Graduation (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsHGraduationBarChartData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - Low 6Y Graduation (2022)
                    </div>
                    
                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsLGraduationBarChartData}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Graduation  Insights end */}

           {/* DFW  Insights start */}
           <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                      DFW  Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    DFW Credits (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                        502,20.24%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        22288.84
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                          12,0.48%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                        Engineering
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                          754.12%
                          </h4>
                        </div>  
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        3251.84
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                             87.20
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Majors - High DFW Credits (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={25}
                        maxvalue={50}
                        data={GraduationBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - High DFW Credits (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsHGraduationBarChartData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - Low DFW Credits (2022)
                    </div>
                    
                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsLGraduationBarChartData}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DFW  Insights end */}




          
        </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-[1.67vw] mb-[32px] xl:mb-[2.09vw] my-[20px] xl:my-[1.083vw]">
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"1Y Retention (2022)"}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8 ">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          105090
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            28%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw] ">
                      1Y Retention trend - College of Engineering
                    </div>

                    <div className="xl:h-[9.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <RetentionTrendLineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "-2%",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 8,
                            overflow: "break",
                            ellipsis:'break'
                          },
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "20%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#FF8C38", "#7E2910", "#D73F09", "#F8B720"]}
                        circlecolor={[
                          "#FF8C38",
                          "#7E2910",
                          "#D73F09",
                          "#F8B720",
                        ]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={[
                          "1Y Retention %",
                          "2Y Retention %",
                          "3Y Retention %",
                          "4Y %",
                        ]}
                        data={[
                          [26, 55, 74, 100],
                          [75, 60, 55, 85],
                          [55, 74, 80, 90],
                          [60, 75, 55, 75],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"1Y Student Migration(2022) "}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          2318
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            26%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw]">
                      1Y migration trend - College of Engineering
                    </div>

                    <div className="xl:h-[9.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <MigrationtrendLineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "-2%",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 8,
                          },
                          itemGap: 20,
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "20%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        circlecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={["Under Grad", "Grad", "Post Grad"]}
                        data={[
                          [18, 22, 30, 25],
                          [30, 40, 30, 38],
                          [38, 42, 35, 30],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"6Y Graduation Rate(2022) "}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          79370
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            23%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw]">
                      1Y migration trend - College of Engineering
                    </div>

                    <div className="xl:h-[9.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <GraduationtrendLineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "-2%",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 8,
                          },
                          itemGap: 20,
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "20%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        circlecolor={["#FE6B11", "#F8B720", "#5287DF"]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={["Under Grad", "Grad", "Post Grad"]}
                        data={[
                          [18, 10, 30, 25],
                          [30, 40, 40, 38],
                          [38, 20, 35, 30],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <ChartWrapper
              title={"DFW(2022)"}
              ExportIcon={true}
              data={
                <div className="p-[16px] xl:p-[0.833vw] pt-[0px] xl:pt-[0vw] ">
                  <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.625vw]   rounded-md">
                    <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                      <div className="col-span-8">
                      <div className="bullet_chart mt-1">
                      <div className=" text-[#53565A] text-[12px] xl:text-[0.625vw] font-light uppercase">Goal Achievement:</div>
                        <ReactEcharts
                          echarts={echarts}
                          option={chartConfig}
                          opts={{ renderer: "svg" }}
                        />
                         <div className=" text-[#53565A] text-[12px] xl:text-[0.525vw] font-light italic">(7% required to achieve the Retention goal):</div>
                        </div>
                        
                      </div>
                      <div className="col-span-4 p-[8px] xl:p-[0.221vw] text-center">
                        <h4 className="text-[#324DA6] text-[16px] xl:text-[0.968vw] font-medium">
                          325184
                        </h4>
                        <div className="flex xl:gap-[0.521vw] gap-[10px] mt-1 items-center">
                          <div className="bg-[#fff] px-[10px] xl:px-[0.617vw] py-[8px] xl:py-[0.217vw] text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold rounded-md">
                            28%
                          </div>
                          <div className=" text-[#046C4E] text-[12px] xl:text-[0.725vw] font-medium rounded-md">
                            12{" "}
                          </div>
                          <i
                            className="pi pi-arrow-up text-[#046C4E]"
                            style={{ fontSize: "11px", fontWeight: "600" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-medium px-[12px] xl:px-[0.573vw] py-[8px] xl:py-[0.217vw]">
                      DFW credits & dFW rate
                    </div>

                    <div className="xl:h-[9.375vw] h-[180px] border-t border-[#CFCCC3]">
                      <DFWcreditsbarlineChart
                        legend={{
                          icon: "roundRect",
                          bottom: "-2%",
                          right: "0%",
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#53565A",
                            fontSize: 8,
                          },
                          itemGap: 20,
                        }}
                        grid={{
                          top: "10%",
                          right: "0%",
                          bottom: "20%",
                          left: "0%",
                          containLabel: true,
                        }}
                        linecolor={["#D73F09"]}
                        barcolor={["#5287DF"]}
                        circlecolor={["#D73F09"]}
                        xAxisLabeldata={["2019", "2020", "2021", "2022"]}
                        name={["DFW Rate", "DFW Credits"]}
                        data={[
                          [40, 22, 30, 25],
                          [40, 41, 48, 49, 50],
                        ]}
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          {/* Retention Insights start */}
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                    Retention Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                  Students 1Y Retention (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                            425,13.18%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                          3223,86.50%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                            32,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                          College of Engineering:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            122,11.61%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                          1050,90.28%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            11,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                      Majors - High 1Y retention (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={250}
                        maxvalue={1000}
                        data={RetentioBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                      Programs - High 1Y Retention (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "5%",
                      bottom: "0%",
                      left: "5%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={324}
                    data={ProgramsretentiontData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                      Programs - Low 1Y Retention (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "5%",
                      bottom: "0%",
                      left: "5%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={324}
                    data={ProgramsretentiontData1}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Retention Insights end */}

                     {/* Migration  Insights start */}
           <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                  Migration  Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                Students 1Y Migration (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                        502,20.24%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        2480,69.91% 
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                          12,0.48%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                          College of Engineering:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            122,11.61%
                          </h4>
                        </div>  
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        793,70.23%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            11,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                        Majors - High 1Y Migration (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={25}
                        maxvalue={50}
                        data={MigrationBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - High 1Y Migration (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsHMigrationBarChartData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - Low 1Y Migration (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsLMigrationBarChartData}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Migration  Insights end */}





          {/* Graduation  Insights start */}
          <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                     Graduation  Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Students 6Y Graduation (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                        502,20.24%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        2480,69.91%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                          12,0.48%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                          College of Engineering:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            122,11.61%
                          </h4>
                        </div>  
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        793,70.23%
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                            11,1%
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Majors - High 6Y Graduation (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={25}
                        maxvalue={50}
                        data={GraduationBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - High 6Y Graduation (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsHGraduationBarChartData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - Low 6Y Graduation (2022)
                    </div>
                    
                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsLGraduationBarChartData}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Graduation  Insights end */}

           {/* DFW  Insights start */}
           <div className="bg-white rounded-[16px] dark:bg-[#191A1E] border border-[#CFCCC3]">
            <div className="bg_insight xl:h-[7.813vw] h-[150px]">
              <div className="absolute xl:top-[3vw] top-[70px] w-full xl:px-[1.250vw] px-[24px]">
                <div className="flex justify-between w-full">
                  <h3 className="text-[#fff] text-[12px] xl:text-[1.250vw] font-medium">
                      DFW  Insights
                  </h3>
                  <Link
                    href=""
                    onClick={() => setVisibleRight(true)}
                    className="bg-[#EF5007]  px-[24px] xl:px-[1.250vw] py-[12px] xl:py-[0.625vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-normal rounded-lg"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-[18px] xl:p-[1.146vw] ">
              <div>
                <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    DFW Credits (2022)
                </div>
                <div className="xl:space-y-[1.250vw] space-y-[20px]">
                  <div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#F3F0E7] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-normal  w-1/2">
                          OSU:
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                        502,20.24%
                          </h4>
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        22288.84
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[10px] xl:text-[0.521vw] font-medium">
                          12,0.48%
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="xl:space-y-[0.317vw] space-y-[8px] mt-2 border-b border-[#CFCCC3] pb-2">
                      <div className="flex w-full justify-between items-center">
                        <h6 className="text-[#53565A] text-[15px] xl:text-[0.833vw] font-medium  w-1/2">
                        Engineering
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            FTFT
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                          754.12%
                          </h4>
                        </div>  
                      </div>

                      <div className="flex w-full justify-between">
                        <h6 className="text-[#FE6B11]  text-[22px] xl:text-[1.250vw] font-semibold  w-1/2">
                        3251.84
                        </h6>
                        <div className="bg-[#F4F4F4] text-[#53565A] xl:p-[0.313vw] p-[8px]  rounded-sm w-1/2">
                          <p className="text-[10px] xl:text-[0.521vw] font-light">
                            URM
                          </p>
                          <h4 className="text-[#FE6B11] text-[10px] xl:text-[0.521vw] font-medium">
                             87.20
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Majors - High DFW Credits (2022)
                    </div>

                    <div className="xl:h-[8.854vw] h-[170px] border-b border-[#CFCCC3] pb-3">
                    <RetentionBarChart
                        legend={{
                          show: false,
                        }}
                        grid={{
                          top: "8%",
                          right: "0%",
                          bottom: "5%",
                          left: "0%",
                          containLabel: true,
                        }}
                        barcolor={['#5287DF']}
                        xAxisLabeldata={['General\n Engineering', 'Computer\n Scienc', 'Energy\n Systems\n Engineering', 'Mechnical\n Engineering', 'Engineering\n Science']}
                        name={['DFW Rate']}
                        minvalue={0}
                        intervalvalue={25}
                        maxvalue={50}
                        data={GraduationBarChartData}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - High DFW Credits (2022)
                    </div>

                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsHGraduationBarChartData}
                  />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#53565A] text-[14px] xl:text-[0.729vw] font-semibold ">
                    Programs - Low DFW Credits (2022)
                    </div>
                    
                    <div className="xl:h-[10.854vw] h-[170px] border-b border-[#CFCCC3] mt-2 pb-3">
                    <ProgramsRetentionhorizontalbarchart
                    legend={{
                      show: false,
                      icon: "roundRect",
                      bottom: "0%",
                      left: "0%",
                      itemWidth: 10,
                      itemHeight: 10
                    }}
                    grid={{
                      top: "0%",
                      right: "2%",
                      bottom: "0%",
                      left: "2%",
                      containLabel: true,
                    }}
                    label={{
                      show: true,
                      color: currentTheme === 'dark' ? '#FFFFFF' : "#FFFFFF",
                      fontWeight:'bold',
                      position: 'insideRight',
                    }}
                    minv={0}
                    maxv={25}
                    data={ProgramsLGraduationBarChartData}
                  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DFW  Insights end */}




          
        </div>
                </TabPanel>
              </Tabs>
        
        {/* sidebar */}
        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
          className="kpisidebar highlights-sidebar xl:w-[45.667vw] w-[700px]"
          style={{ width: "58rem" }}
        >
          <div className="xl:p-[1.250vw] p-[24px]">
            <div className="flex flex-wrap justify-between">
              <div className="text-[#53565A] text-[22px] xl:text-[1.250vw] font-semibold ">
                Highlights
              </div>
              <Link
                href="/detailedanalysis"
                className="bg-[#1F2A37]  px-[12px] xl:px-[0.625vw] py-[10px] xl:py-[0.521vw] text-[#fff] text-[14px] xl:text-[0.729vw] font-light rounded-lg"
              >
                See More Details
              </Link>
            </div>
            <div className="xl:mt-[1.250vw] mt-[22px]">
              <p className="text-[#9CA1AB] text-[15px] xl:text-[0.750vw] font-light">
                Student 1Y Retention is progressing well with{" "}
                <span className="text-[#31C48D]">12%</span> growth in Fall
                2022-23 compared to Fall 2021-22
              </p>
              <p className="text-[#9CA1AB] text-[15px] xl:text-[0.750vw] font-light">
                Growth of UnderGrad students 1Y Retention are{" "}
                <span className="text-[#31C48D]">10% </span>higher compared to
                Grad Students
              </p>
              <p className="text-[#9CA1AB] text-[15px] xl:text-[0.750vw] font-light">
                Robotics Major Student 1Y Retention has dropped by{" "}
                <span className="text-[#F98080]">15%</span> compared to Fall
                2021-22
              </p>
            </div>
          </div>
          <div className="bg-[#F4F4F4] xl:px-[1.250vw] px-[20px] xl:py-[0.833vw] py-[14px]">
            <div className="bg-white rounded-[12px] xl:mb-[1.667vw] mb-[32px]">
              <div className=" px-[15px] xl:px-[0.729vw] py-[14px] xl:py-[0.729vw] ">
                <div className="flex items-center grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 gap-4 xl:gap-[1.67vw]  border-b border-[#CFCCC3] pb-3">
                  <div className="col-span-3 text-[#242526] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold">
                    Retention trend - College
                  </div>
                  <div className="col-span-3">
                    <div className="flex justify-end xl:gap-[0.417vw] gap-[10px] custom-dropdown">
                      <div className="xl:w-[8.213vw] w-[120px]">
                        <label className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-light">
                          Choose Metric
                        </label>
                        <Dropdown
                          value={selectedRetention}
                          onChange={(e) => setSelectedRetention(e.value)}
                          options={Retention}
                          optionLabel="name"
                          placeholder="Select a Retention"
                          className="w-full"
                        />
                      </div>
                      <div className="xl:w-[8.213vw] w-[120px]">
                        <label className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-light">
                          View By
                        </label>
                        <Dropdown
                          value={selectedRetention}
                          onChange={(e) => setSelectedRetention(e.value)}
                          options={Retention}
                          optionLabel="name"
                          placeholder="Select a Retention"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:h-[12.417vw] h-[200px]">
                  { loadHighlighChart &&
                    <RetentionTrendCollegeBarChart 
                      legend={{
                        icon: "roundRect",
                        bottom: "0%",
                        right:"0%",
                        itemWidth:10,
                        itemHeight:10,
                        textStyle: {
                            color: "#53565A",
                            fontSize: 10,
                        },
                        itemGap: 20
                      }}
                      grid={{
                        top: "10%",
                        right: "0%",
                        bottom: "15%",
                        left: "0%",
                        containLabel: true,
                      }}
                      barData1={["152","146","162","172","151"]}
                      barcolor1={["#324DA6"]}
                      barcolor2={["#D73F09"]}
                      barData2={["149","133","163","133","163"]}
                      xAxisData={["2018","2019","2020","2021","2022"]}
                      name={['Pell Received', 'No Pell Received']}
                    />
                  }
                </div>
              </div>
            </div>

            <div className="flex items-center grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 xl:gap-[1.67vw]">
              <div className="bg-white rounded-[12px] xl:mb-[1.667vw] mb-[32px] col-span-5">
                <div className=" px-[15px] xl:px-[0.729vw] py-[14px] xl:py-[0.729vw] ">
                  <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[1.67vw]  border-b border-[#CFCCC3] pb-3">
                    <div className="text-[#242526] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold">
                      Retention by Student Demographics
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-between items-center xl:p-[0.625vw] p-[12px]">
                      <div className="text-[#242526] text-[28px] xl:text-[1.458vw] font-normal">
                        1050,66%
                      </div>
                      <div className="bg-[#057A55] xl:px-[0.469vw] px-[5px] xl:py-[0.269vw] py-[2px] flex justify-between h-[28px] rounded-md">
                        <div className="text-[#fff] text-[12px] xl:text-[0.625vw] font-normal">
                          LY Var: 10%
                        </div>
                        <i className="osu-arrow-line-up text-[#fff] ml-2"></i>
                      </div>
                    </div>
                  </div>

                  <div className="xl:mt-[0.625vw] mt-[12px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-1 xl:gap-[0.313vw]">
                      <div className="bg-[#F4F4F4] rounded-md xl:p-[0.417vw] p-[10px]">
                        <div className="uppercase text-[#53565A] text-[12px] xl:text-[0.625vw] font-normal mb-1">
                          male
                        </div>
                        <div className="flex justify-between">
                          <div className="uppercase text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">
                            832,81.81 %
                          </div>
                          <div className="">
                            <div className="text-[#069564] text-[12px] xl:text-[0.625vw] font-normal">
                              4%{" "}
                              <i className="osu-arrow-line-up text-[#069564] ml-0.5"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#F4F4F4] rounded-md xl:p-[0.417vw] p-[10px]">
                        <div className="uppercase text-[#53565A] text-[12px] xl:text-[0.625vw] font-normal mb-1">
                          FTFT
                        </div>
                        <div className="flex justify-between">
                          <div className="uppercase text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">
                            122,67 %
                          </div>
                          <div className="">
                            <div className="text-[#069564] text-[12px] xl:text-[0.625vw] font-normal">
                              4%{" "}
                              <i className="osu-arrow-line-up text-[#069564] ml-0.5"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#F4F4F4] rounded-md xl:p-[0.417vw] p-[10px]">
                        <div className="uppercase text-[#53565A] text-[12px] xl:text-[0.625vw] font-normal mb-1">
                          female
                        </div>
                        <div className="flex justify-between">
                          <div className="uppercase text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">
                            218,18.18 %
                          </div>
                          <div className="">
                            <div className="text-[#069564] text-[12px] xl:text-[0.625vw] font-normal">
                              4%{" "}
                              <i className="osu-arrow-line-up text-[#069564] ml-0.5"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#F4F4F4] rounded-md xl:p-[0.417vw] p-[10px]">
                        <div className="uppercase text-[#53565A] text-[12px] xl:text-[0.625vw] font-normal mb-1">
                          Part-time
                        </div>
                        <div className="flex justify-between">
                          <div className="uppercase text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">
                            1200,67 %
                          </div>
                          <div className="">
                            <div className="text-[#069564] text-[12px] xl:text-[0.625vw] font-normal">
                              4%{" "}
                              <i className="osu-arrow-line-up text-[#069564] ml-0.5"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[12px] xl:mb-[1.667vw] mb-[32px] col-span-7">
                <div className=" px-[15px] xl:px-[0.729vw] py-[14px] xl:py-[0.729vw] ">
                  <div className="flex items-center grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-[1.67vw]  border-b border-[#CFCCC3]  pb-3">
                    <div className="text-[#242526] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold">
                      Retention by Residency
                    </div>
                  </div>

                  <div className="xl:h-[11vw] h-[170px]">
                  { loadHighlighChart &&
                    <RetentionbyResidencyLineChart
                      legend={{
                        icon: "roundRect",
                        bottom: "0%",
                        left:"15%",
                        itemWidth:10,
                        itemHeight:10,
                        backgroundColor: "#F4F4F4",
                        borderRadius: [6, 6, 6, 6]
                      }}
                      grid={{
                        top: "10%",
                        right: "0%",
                        bottom: "15%",
                        left: "0%",
                        containLabel: true,
                      }}
                      linecolor={["#324DA6","#D73F09","#F2980E"]}
                      circlecolor={["#324DA6","#D73F09","#F2980E"]}
                      xAxisLabeldata={['2019 - 20', '2020 - 21', '2021 - 22', '2022 - 23','2023 - 24']}
                      name={['OSU Resident', 'Non Resident', 'NA']}
                      data={[[55, 85, 85, 99, 99],[45, 26, 26, 20, 20]]}
                    />
                  }
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] xl:mb-[1.667vw] mb-[32px]">
              <div className=" px-[15px] xl:px-[0.729vw] py-[14px] xl:py-[0.729vw] ">
                <div className="flex items-center grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 gap-4 xl:gap-[1.67vw]  border-b border-[#CFCCC3] pb-3">
                  <div className="col-span-3 text-[#242526] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold">
                    Race trend - 1Y Retention Rate
                  </div>
                  <div className="col-span-3">
                    <div className="flex justify-end xl:gap-[0.417vw] gap-[10px] custom-dropdown">
                      <div className="xl:w-[8.213vw] w-[120px]">
                        <label className="text-[#53565A] text-[12px] xl:text-[0.625vw] font-light">
                          Pick your Dimension
                        </label>
                        <Dropdown
                          value={selectedRetention}
                          onChange={(e) => setSelectedRetention(e.value)}
                          options={Retention}
                          optionLabel="name"
                          placeholder="Select a Retention"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:h-[15.625vw] h-[300px]">
                { loadHighlighChart &&
                <RaceTrendLineChart
                  legend={{
                    icon: "roundRect",
                    orient: 'vertical',
                    right: "-5",
                    top: "15",
                    bottom: "20",
                    itemWidth:20,
                    itemHeight:2,
                    textStyle: {
                        color: "#53565A",
                        fontSize: 12,
                        fontWeight:"400",
                    }
                  }}
                  grid={{
                    top: "10%",
                    right: "30%",
                    bottom: "15%",
                    left: "0%",
                    containLabel: true,
                  }}
                  linecolor={["#D73F09","#948C7B","#324DA6","#F8B720","#773310","#242526","#057A55","#FF8C38","#C81E1E"]}
                  circlecolor={["#D73F09","#948C7B","#324DA6","#F8B720","#773310","#242526","#057A55","#FF8C38","#C81E1E"]}
                  xAxisLabeldata={['2006', '2007', '2008', '2009',"2010","2011","2012","2013","2014","2015","2016"]}
                  name={['Asian', 'White',"Two or more races", 'International','Hispanic',"Unknown","Native Hawaiian / Pacific Islander","American Indian / Alaska Native","Black or African American"]}
                  data={[[90, 60, 80, 20,10,40,20,35,2,10,30],[75, 60, 55, 85,50,74,52,52,32,41,14],
                    [50, 60, 60, 40,70,20,25,40,60,40,50],[40,60,40,50,60,30,40,50,40,60,50],
                    [50, 25, 24, 35,20,40,30,20,50,40,70],[30, 80, 50, 75,40,90,40,30,2,2,10],
                    [65, 90, 70, 90,10,15,1,2,30,40,50],[1, 10, 7, 30,35,20,40,60,70,80,90],
                    [50,30,30,35,20,40,20,40,2,10,30]]}
                  />
                }
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] xl:mb-[1.667vw] mb-[32px]">
              <div className=" px-[15px] xl:px-[0.729vw] py-[14px] xl:py-[0.729vw] ">
                <div className="flex items-center grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 gap-4 xl:gap-[1.67vw]  border-b border-[#CFCCC3] pb-3">
                  <div className="col-span-3 text-[#242526] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold">
                    Race trend - 2Y Retention Rate
                  </div>
                </div>

                <div className="xl:h-[15.625vw] h-[300px]">
                { loadHighlighChart &&
                <RaceTrendLineChart
                  legend={{
                    icon: "roundRect",
                    orient: 'vertical',
                    right: "-5",
                    top: "15",
                    bottom: "20",
                    itemWidth:20,
                    itemHeight:2,
                    textStyle: {
                        color: "#53565A",
                        fontSize: 12,
                        fontWeight:"400",
                    }
                  }}
                  grid={{
                    top: "10%",
                    right: "30%",
                    bottom: "15%",
                    left: "0%",
                    containLabel: true,
                  }}
                  linecolor={["#D73F09","#948C7B","#324DA6","#F8B720","#773310","#242526","#057A55","#FF8C38","#C81E1E"]}
                  circlecolor={["#D73F09","#948C7B","#324DA6","#F8B720","#773310","#242526","#057A55","#FF8C38","#C81E1E"]}
                  xAxisLabeldata={['2006', '2007', '2008', '2009',"2010","2011","2012","2013","2014","2015","2016"]}
                  name={['Asian', 'White',"Two or more races", 'International','Hispanic',"Unknown","Native Hawaiian / Pacific Islander","American Indian / Alaska Native","Black or African American"]}
                  data={[[90, 60, 80, 20,10,40,20,35,2,10,30],[75, 60, 55, 85,50,74,52,52,32,41,14],
                    [50, 60, 60, 40,70,20,25,40,60,40,50],[40,60,40,50,60,30,40,50,40,60,50],
                    [50, 25, 24, 35,20,40,30,20,50,40,70],[30, 80, 50, 75,40,90,40,30,2,2,10],
                    [65, 90, 70, 90,10,15,1,2,30,40,50],[1, 10, 7, 30,35,20,40,60,70,80,90],
                    [50,30,30,35,20,40,20,40,2,10,30]]}
                  />
                }
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        {/* sidebar */}
      </Layout>
    </>
  );
}
