import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import echarts, { graphic } from 'echarts';
import Landinghorizontalbarchart from "@/components/charts/landinghorizontalbarchart";
import RetentionTrendLineChart from "@/components/charts/retentiontrend";
import MigrationtrendLineChart from "@/components/charts/migrationtrendlinechart";
import GraduationtrendLineChart from "@/components/charts/graduationtrendlinechart";
import DFWcreditsbarlineChart from "@/components/charts/dfwcreditsbarlinechart";
import RetentionbyResidencyLineChart from "@/components/charts/retentionbyresidencylinechart";
import { useTheme } from "next-themes";
import RetentionTrendCollegeBarChart from "@/components/charts/retentiontrendcollegebarchart";
import ProgramsRetentionhorizontalbarchart from "@/components/charts/programsretentionhorizontalbarchart"
import RaceTrendLineChart from "@/components/charts/racetrendlinechart";
import RetentionBarChart from "@/components/charts/retentionbarchart";

export default function index() {
    const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const RetentioBarChartData = [
    {
      value: 985,
      itemStyle: {
        color: '#FFD4A8'
      }
    },
    {
      value: 100,
      itemStyle: {
        color: '#FF8C38'
      }
    },
    {
      value: 150,
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

  // customer count 
  const CustomerCountData = {
    label: ['# First Yr Students','#Jr Cohort Students','# FTFT Cohort Students',],
    value: [407, 792, 
        {
            value: 1163,
            itemStyle: {
              color: '#324DA6'
            }
          },
    ]
  }
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
  const ProgramslowretentiontData = {
    label: ['Engineering Science',
    'Energy System Engineering',
    'Engineering Science',
    'Radiation Health Physics',
    'General Engineering',],
    value: [       
      {
        value: 6,
          itemStyle: {
          color: '#EF5007'
          }
        },
        {
        value: 5,
          itemStyle: {
          color: '#9D2F0F'
          }
        },
        {
        value: 4,
          itemStyle: {
          color: '#EF5007'
          }
        },
        {
        value: 2,
          itemStyle: {
          color: '#FF8C38'
          }
        },
        {
        value: 2,
          itemStyle: {
          color: '#FFD4A8'
          },
          label: {
            color:'#000'
          }
        },
    ]
  }


  // Programs - High 1Y Migration (2022) 
  const ProgramsMigrationtData = {
    label: ['-',
    '-',
    '-',
    'Computer',
    'Mechanical Engineering',],
    value: [       
      {
        value: 5,
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
        value: 5,
          itemStyle: {
          color: '#D67309'
          }
        },
        {
        value: 7,
          itemStyle: {
          color: '#FCE38B'
          },          
          label: {
            color:'#000'
          }
        },
        {
        value: 13,
          itemStyle: {
          color: '#F8B720'
          },
        },
    ]
  }

  // Programs - Low 1Y Migration (2022)
  const ProgramsLowMigrationtData = {
    label: ['-',
    '-',
    '-',
    'Civil Engineering',
    'Electrical and Computer e...',],
    value: [       
      {
        value: 1,
          itemStyle: {
          color: '#773310'
          }
        },
        {
        value: 1,
          itemStyle: {
          color: '#B24F0B'
          }
        },
        {
        value: 1,
          itemStyle: {
          color: '#D67309'
          }
        },
        {
        value: 2,
          itemStyle: {
          color: '#FCE38B'
          },          
          label: {
            color:'#000'
          }
        },
        {
        value: 1,
          itemStyle: {
          color: '#F8B720'
          },
        },
    ]
  }


  // Programs - High 6Y Graduation (2022) 
  const ProgramsGraduationData = {
    label: ['Chemical Engineering',
    'Electrical and Computer Engineering',
    'Civil Engineering',
    'Computer Science',
    'Mechnical Engineering',],
    value: [       
      {
        value: 54,
          itemStyle: {
          color: '#2B407D'
          }
        },
        {
        value: 63,
          itemStyle: {
          color: '#324DA6'
          }
        },
        {
        value: 66,
          itemStyle: {
          color: '#3D6CD3'
          }
        },
        {
        value: 142,
          itemStyle: {
          color: '#73A7E7'
          }
        },
        {
        value: 159,
          itemStyle: {
          color: '#DFEBFA'
          },          
          label: {
            color:'#000'
          }
        },
    ]
  }

  // Programs - Low 6Y Graduation (2022) 
  const ProgramsLowGraduationData = {
    label: ['Nuculear Engineering',
    'Environmental engineering',
    'Architectural Engineering',
    'Radiation Health Physics',
    'Manuafacturing engineering',],
    value: [       
      {
        value: 13,
          itemStyle: {
          color: '#2B407D'
          }
        },
        {
        value: 11,
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
        value: 1,
          itemStyle: {
          color: '#73A7E7'
          }
        },
        {
        value: 1,
          itemStyle: {
          color: '#DFEBFA'
          },          
          label: {
            color:'#000'
          }
        },
    ]
  }

  // Programs - High DFW Credits (2022)
  const ProgramsDFWCreditsData = {
    label: ['Electrical Engineering',
    'Mechanical Engineering',
    'Engineering Science',
    'Computer Science',],
    value: [  
        {
        value: 227,
          itemStyle: {
          color: '#324DA6'
          }
        },
        {
        value: 323,
          itemStyle: {
          color: '#3D6CD3'
          }
        },
        {
        value: 675,
          itemStyle: {
          color: '#73A7E7'
          }
        },
        {
        value: 1488,
          itemStyle: {
          color: '#DFEBFA'
          },          
          label: {
            color:'#000'
          }
        },
    ]
  }

  // Programs - Low DFW Credits (2022)
  const ProgramsLowDFWCreditsData = {
    label: ['Humanitarian Engg',
    'Outdoor Products',
    'Architectural Engineering',
    'Envi. Engg',],
    value: [  
        {
        value: 2.18,
          itemStyle: {
          color: '#324DA6'
          }
        },
        {
        value: 4.53,
          itemStyle: {
          color: '#3D6CD3'
          }
        },
        {
        value: 6.8,
          itemStyle: {
          color: '#73A7E7'
          }
        },
        {
        value: 8.33,
          itemStyle: {
          color: '#DFEBFA'
          },          
          label: {
            color:'#000'
          }
        },
    ]
  }

  return (
    <>    
    <div className="flex flex-wrap gap-5 p-5">
    {/**-Landing Horizontal Bar Chart--**/}
    <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
            <Landinghorizontalbarchart
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
                right: "0%",
                bottom: "0%",
                left: "5%",
                containLabel: true,
              }}
              label={{
                show: true,
                color: currentTheme === 'dark' ? '#FFFFFF' : "#53565A",
                position: 'outside',
              }}
              data={CustomerCountData}
            />
          </div>
           {/**-Landing Horizontal Bar Chart--**/}
           {/* Retention trend - College - Bar Chart Start */}

           <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
           </div>

           {/* Retention trend - College - Bar Chart End */}
           {/* Race trend - 1Y & 2Y Retention Rate Line Chart Start  */}
              <div className="xl:h-[20.625vw] h-[300px] xl:w-[40.042vw] flex">
              <RaceTrendLineChart
               legend={{
                icon: "roundRect",
                orient: 'vertical',
                right: "-5",
                top: "30",
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
                right: "38%",
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
              {/* <div className="flex flex-col text-[12px] justify-center xl:text-[0.625vw] ml-8 gap-1">
                <div className="flex items-center gap-4"><span className="bg-[#D73F09] w-6 h-1"></span>Asian</div>
                <div className="flex items-center gap-4"><span className="bg-[#948C7B] w-6 h-1"></span>White</div>
                <div className="flex items-center gap-4"><span className="bg-[#324DA6] w-6 h-1"></span>More races</div>
                <div className="flex items-center gap-4"><span className="bg-[#F8B720] w-6 h-1"></span>International</div>
                <div className="flex items-center gap-4"><span className="bg-[#773310] w-6 h-1"></span>Hispanic</div>
                <div className="flex items-center gap-4"><span className="bg-[#242526] w-6 h-1"></span>Unknown</div>
                <div className="flex items-center gap-4"><span className="bg-[#057A55] w-6 h-1"></span>Hawaiian</div>
                <div className="flex items-center gap-4"><span className="bg-[#FF8C38] w-6 h-1"></span>Indian</div>
                <div className="flex items-center gap-4"><span className="bg-[#C81E1E] w-6 h-1"></span>American</div>
              </div> */}
              </div>
          

             {/* Race trend - 1Y & 2Y Retention Rate Line Chart End  */}

           {/**College At a Glance***/}
           {/**Retention Trend Line Chart***/}
           <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
            <RetentionTrendLineChart
              legend={{
                icon: "roundRect",
                bottom: "0%",
                right:"0%",
                itemWidth:10,
                itemHeight:10,
                textStyle: {
                    color: "#53565A",
                    fontSize: 10,
                }
              }}
              grid={{
                top: "10%",
                right: "0%",
                bottom: "15%",
                left: "0%",
                containLabel: true,
              }}
              linecolor={["#FF8C38","#7E2910","#D73F09","#F8B720"]}
              circlecolor={["#FF8C38","#7E2910","#D73F09","#F8B720"]}
              xAxisLabeldata={['2019', '2020', '2021', '2022']}
              name={['1Y Retention %', '2Y Retention %', '3Y Retention %','4Y Retention %']}
              data={[[26, 55, 74, 100,],[75, 60, 55, 85,],[55, 74, 80, 90,],[60, 75, 55, 75,]]}
            />
          </div>
          {/**Retention Trend Line Chart***/}
          {/**1Y migration trend - College of Engineering***/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
            <MigrationtrendLineChart
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
              linecolor={["#FE6B11","#F8B720","#5287DF",]}
              circlecolor={["#FE6B11","#F8B720","#5287DF",]}
              xAxisLabeldata={['2019', '2020', '2021', '2022']}
              name={['Under Grad', 'Grad', 'Post Grad']}
              data={[[18, 22, 30, 25,],[30, 40, 30, 38,],[38, 42, 35, 30,]]}
            />
          </div>
          {/**1Y migration trend - College of Engineering***/}
          {/**1Y Graduation trend - College of Engineering***/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
            <GraduationtrendLineChart
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
              linecolor={["#FE6B11","#F8B720","#5287DF",]}
              circlecolor={["#FE6B11","#F8B720","#5287DF",]}
              xAxisLabeldata={['2019', '2020', '2021', '2022']}
              name={['Under Grad', 'Grad', 'Post Grad']}
              data={[[18, 22, 30, 25,],[30, 40, 30, 38,],[38, 42, 35, 30,]]}
            />
          </div>
          {/**1Y Graduation trend - College of Engineering***/}
          {/**dFW credits & dFW rate***/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
            <DFWcreditsbarlineChart
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
              linecolor={["#D73F09"]}
              barcolor={['#5287DF']}
              circlecolor={["#D73F09"]}
              xAxisLabeldata={['2019', '2020', '2021', '2022']}
              name={['DFW Rate', 'DFW Credits']}
              data={[[40, 22, 30, 25,],[40, 41, 48, 49, 50]]}
            />
          </div>
          {/**dFW credits & dFW rate***/}
           {/**College At a Glance***/}
           {/**College At a Glance - Explore Highlights Popup Chart ***/}
           {/**Retention by Residency***/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
          </div>
          {/**Retention by Residency***/}
          {/**College At a Glance - Explore Highlights Popup Chart ***/}


          {/**-Programs - High 1Y Retention (2022)--**/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
           {/**-Programs - High 1Y Retention (2022)--**/}
           {/**-Programs - Low 1Y Retention (2022)--**/}
  <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
    maxv={6}
    data={ProgramslowretentiontData}
  />
  </div>
   {/**-Programs - Low 1Y Retention (2022)--**/}
           {/**-Programs - High 1Y Migration (2022)--**/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
            maxv={15}
            data={ProgramsMigrationtData}
          />
          </div>
           {/**-Programs - High 1Y Migration (2022)--**/}
           {/**-Programs - Low 1Y Migration (2022)--**/}
            <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
            maxv={3}
            data={ProgramsLowMigrationtData}
            />
            </div>
            {/**-Programs - Low 1Y Migration (2022)--**/}
           {/**-Programs - High 6Y Graduation (2022)--**/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
            maxv={159}
            data={ProgramsGraduationData}
          />
          </div>
           {/**-Programs - High 6Y Graduation (2022)--**/}
           {/**-Programs - Low 6Y Graduation (2022)--**/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
            maxv={13}
            data={ProgramsLowGraduationData}
          />
          </div>
            {/**-Programs - Low 6Y Graduation (2022)--**/}
           {/**-Programs - High DFW Credits (2022)--**/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
            maxv={1488}
            data={ProgramsDFWCreditsData}
          />
          </div>
           {/**-Programs - High DFW Credits (2022)--**/}
           {/**-Programs - Low DFW Credits (2022)--**/}
          <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
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
            maxv={8.33}
            data={ProgramsLowDFWCreditsData}
          />
          </div>
          {/**-Programs - Low DFW Credits (2022)--**/}
           
           {/**-Major - High 1Y Retention (2022)--**/}
           <div className="xl:h-[15.625vw] h-[300px] xl:w-[26.042vw]">
            <RetentionBarChart
              legend={{
                show: false,
              }}
              grid={{
                top: "10%",
                right: "0%",
                bottom: "15%",
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
           {/**-Major - High 1Y Retention (2022)--**/}

           </div>
          </>
  )
}
