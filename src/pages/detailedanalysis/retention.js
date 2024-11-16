import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Dropdown } from "primereact/dropdown";
import Image from "next/image";
import { Sidebar } from "primereact/sidebar";

const RetentionMigration = () => {
  const [selectedCompare, setSelectedCompare] = useState(null);
  const CompareData = [
    { name: "College Level", code: "NY" },
    { name: "University Level", code: "RM" },
  ];
  const [visibleRight, setVisibleRight] = useState(false);

  const MigrationChart = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //       type: 'cross',
    //       crossStyle: {
    //         color: '#999'
    //       }
    //     }
    //   },
    //   toolbox: {
    //     feature: {
    //       dataView: { show: true, readOnly: false },
    //       magicType: { show: true, type: ['line', 'bar'] },
    //       restore: { show: true },
    //       saveAsImage: { show: true }
    //     }
    //   },
    legend: {
      top: "bottom",
      data: [
        "1Y - Retention",
        "1Y - Migration",
        "1Y Ret.Ach %",
        "1Y Migration %",
      ],
    },
    grid:{
      top: "4%",
      right: "3%",
      bottom: "10%",
      left: "3%",
    },
    xAxis: [
      {
        type: "category",
        data: ["2018", "2019", "2020", "2021", "2022"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 400,
        interval: 100,
        axisLabel: {
          formatter: "{value}",
        },
        splitLine: {
          show: true,
          lineStyle: {
              type: 'dashed'  // Set the border style to dashed
          }
      }
      },
      {
        type: "value",
        min: 0,
        max: 100,
        interval: 25,
        axisLabel: {
          formatter: "{value}",
        },
        splitLine: {
          show: true,
          lineStyle: {
              type: 'dashed'  // Set the border style to dashed
          }
      }
      },
    ],
    series: [
      {
        name: "1Y - Retention",
        type: "bar",
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
        },
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        color: "#FFD4A8",
        data: [290, 221, 275, 335, 319],
      },
      {
        name: "1Y - Migration",
        type: "bar",
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
        },
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        color: "#FE6B11",
        data: [251, 169, 194, 133, 23],
      },
      {
        name: "1Y Ret.Ach %",
        type: "line",
        yAxisIndex: 1,
        symbolSize: 10,
        color: "#2B407D",
        symbol: "circle",
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        data: [30, 10, 0, 2, 10],
      },
      {
        name: "1Y Migration %",
        type: "line",
        yAxisIndex: 0,
        color: "#057A55",
        symbolSize: 10,
        symbol: "circle",
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        data: [280, 290, 320, 280, 319],
      },
    ],
  };

  return (
    <div>
      <div className="grid ml-4 ">
        <div className="bg-white rounded-[12px] xl:mb-[0.625vw] mb-[12px] p-4">
        <div className="flex justify-between">
          <div className="text-[20px] xl:text-[1.042vw] font-semibold">
            Retention Vs Migration
          </div>
          <div className="flex gap-2 items-center mr-2">
            <div className="text-[14px] xl:text-[0.729vw] font-normal">
              Compare by
            </div>
            <Dropdown
              value={selectedCompare}
              onChange={(e) => setSelectedCompare(e.value)}
              placeholder="College Level"
              options={CompareData}
              optionLabel="name"
              className="flex items-center bg-[#F5F6F7] collegeLevel"
            ></Dropdown>
            <div
              className="bg-[#D73F09] flex items-center rounded-lg px-4 py-2 gap-2 cursor-pointer"
              onClick={() => setVisibleRight(true)}
            >
              <i className="osu-lamp" style={{ color: "#fff" }}></i>
              <div className="text-[14px] xl:text-[0.729vw] text-white">
                Key Insights
              </div>
            </div>
          </div>
        </div>
        <div className="xl:p-[0.833vw] p-3 xl:h-[30.474vw] h-[500px] w-full">
          <ReactEcharts
            option={MigrationChart}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        </div>
       
        <div className="w-full mt-2 bg-white rounded-[12px] xl:mb-[1.667vw] mb-[32px] p-4">
          <div className="mb-8 xl:text-[1.042vw] text-[20px] font-semibold">
            Programwise Retention (2022)
          </div>
          <table className="mb-4">
            <thead className="border bg-[#F4F4F4]">
              <tr className="text-[16px] xl:text-[0.833vw] text-[#53565A] font-normal">
                <th className="p-6">Residency</th>
                <th>Computer Science</th>
                <th>Mechanical Engineering </th>
                <th>Electrical And Computer Engineering</th>
                <th>Civil Engineering</th>
                <th>Construction Engineering Mgt</th>
                <th>Chemical Engineering</th>
                <th>Nuclear Engineering</th>
              </tr>
            </thead>
            <tbody className="text-[#53565A]">
              <tr className="text-center border text-[16px] xl:text-[0.833vw]">
                <td className="bg-[#F4F4F4] p-4 font-bold">Overall</td>
                <td className="bg-[#ECFDF4]">131</td>
                <td className="bg-[#FDE8E8]">55</td>
                <td className="bg-[#fff]">29</td>
                <td className="bg-[#ECFDF4]">21</td>
                <td className="bg-[#ECFDF4]">12</td>
                <td>11</td>
                <td className="bg-[#ECFDF4]">5</td>
              </tr>
              <tr className="text-center border text-[16px] xl:text-[0.833vw]">
                <td className="bg-[#F4F4F4] p-4 font-bold">Pell Received</td>
                <td>58</td>
                <td>15</td>
                <td className="bg-[#ECFDF4]">9</td>
                <td>8</td>
                <td className="bg-[#ECFDF4]">4</td>
                <td>3</td>
                <td className="bg-[#ECFDF4]">1</td>
              </tr>
              <tr className="text-center border text-[16px] xl:text-[0.833vw]">
                <td className="bg-[#F4F4F4] p-4 font-bold">
                  Pell Not Received
                </td>
                <td className="bg-[#ECFDF4]">73</td>
                <td className="bg-[#FDE8E8]">40</td>
                <td className="bg-[#ECFDF4]">20</td>
                <td>13</td>
                <td>8</td>
                <td>8</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Sidebar
          visible={visibleRight}
          className="detailedSidebar"
          style={{ minWidth: "30vw", position: "relative" }}
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <div>Key Insights</div>
          <div className="grid gap-4 mt-4 px-2">
            <div className="text-[16px] xl:text-[0.833vw] font-semibold text-[#53565A]">
              Trends
            </div>
            <div className="flex gap-2 border rounded-md px-2 py-2 items-center">
              <i className="osu-lamp"></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                Growth of UnderGrad students 1Y Retention are
                <span className="font-semibold text-[#057A55] px-1">
                  10% higher
                </span>
                compared to Grad Students
              </div>
            </div>
            <div className="flex gap-2 border rounded-md px-2 py-2 items-center">
              <i className="osu-lamp"></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                Student 1Y Retention is progressing well with
                <span className="font-semibold text-[#057A55] px-1">
                  12% growth
                </span>
                in Fall 2022-23 compared to Fall 2021-22
              </div>
            </div>
            <div className="flex gap-2 border rounded-md px-2 py-2 items-center">
              <i className="osu-lamp"></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                Student 1Y Retention is progressing well with
                <span className="font-semibold text-[#057A55] px-1">
                  12% growth
                </span>
                in Fall 2022-23 compared to Fall 2021-22
              </div>
            </div>
            <div className="text-[16px] xl:text-[0.833vw] font-semibold text-[#53565A]">
              Gaps
            </div>
            <div className="flex gap-2 border rounded-md px-2 py-2 items-center">
              <i className="osu-lamp"></i>
              <div className="text-[14px] xl:text-[0.729vw] font-normal">
                Robotics Major Student 1Y Retention has
                <span className="font-semibold text-[#C81E1E] px-1">
                  dropped by 15%
                </span>
                compared to Fall 2021-22
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default RetentionMigration;
