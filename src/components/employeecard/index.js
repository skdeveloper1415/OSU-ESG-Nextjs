import Link from "next/link";
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
export default function EmployeeCard(props) {


  return (
  <>
      {props.data.map((elm) => {
        return (
            <div className="bg-[#F6F7F9] border border-[#EAEDF3] rounded-[0.833vw] 
            employee-shadow xl:p-[1.042vw] dark:bg-[#24262D] dark:border-[#2A2C32]">
                <div className="flex xl:gap-[0.725vw] gap-[12px] items-center xl:mb-[1.250vw] mb-[24px]">
                  <div>
                    <img
                      src="/assets/images/emp-1.png"
                      width={"48"}
                      height={"48"}
                      alt="img"
                      className="xl:w-[2.500vw] w-[48px] xl:h-[2.500vw] h-[48px]"
                    />
                  </div>
                  <div>
                    <div className="text-[#24262D] text-16px text-[0.833vw] font-semibold dark:text-[#fff]">
                    {elm.empName}
                    </div>
                    <div className="text-14px text-[0.729vw] text-[#6C768B] font-normal leading-4 dark:text-[#B3B9C6]">
                      Joined in August 2014
                    </div>
                  </div>
                </div>
                <div className=" xl:mb-[1.250vw] mb-[24px]">
                  <div className="flex justify-between xl:py-[1.042vw] py-[20px] xl:px-[0.417vw] px-[8px] border-b border-[#EAEDF3] dark:border-[#2A2C32]">
                    <div className="text-14px text-[0.829vw] text-[#24262D] font-light dark:text-[#fff]">
                      {" "}
                      Cases Received
                    </div>
                    <div className="text-16px text-[0.833vw] text-[#24262D] dark:text-[#fff]">
                      15
                    </div>
                  </div>
                  <div className="flex justify-between xl:py-[1.042vw] py-[20px] xl:px-[0.417vw] px-[8px] border-b border-[#EAEDF3] dark:border-[#2A2C32]">
                    <div className="text-14px text-[0.829vw] text-[#24262D] font-light dark:text-[#fff]">
                      {" "}
                      Cases Processed
                    </div>
                    <div className="text-16px text-[0.833vw] text-[#24262D] dark:text-[#fff]">
                      15
                    </div>
                  </div>
                  <div className="flex justify-between xl:py-[1.042vw] py-[20px] xl:px-[0.417vw] px-[8px] border-b border-[#EAEDF3] dark:border-[#2A2C32]">
                    <div className="text-14px text-[0.829vw] text-[#24262D] font-light dark:text-[#fff]">
                      {" "}
                      TAT
                    </div>
                    <div className="text-16px text-[0.833vw] text-[#24262D] dark:text-[#fff]">
                      15
                    </div>
                  </div>
                  <div className="flex justify-between xl:py-[1.042vw] py-[20px] xl:px-[0.417vw] px-[8px]">
                    <div className="text-14px text-[0.829vw] text-[#24262D] font-light dark:text-[#fff]">
                      {" "}
                      Mins
                    </div>
                    <div className="text-16px text-[0.833vw] text-[#24262D] dark:text-[#fff]">
                      15
                    </div>
                  </div>

                </div>
                <div className="bg-[#FFFFFF] border border-[#EAEDF3] rounded-[0.833vw] dark:bg-[#202227] dark:border-[#202227]">
                  <div className="text-[#24262D] text-16px text-[0.833vw] border-b border-[#DDE1EA] xl:p-[0.833vw] p-[16px] text-start font-semibold leading-8 dark:text-[#fff] dark:border-[#202227]">
                    Trend Productivity
                  </div>
                  <div className="h-[17.917vw] h-345px w-full mb-2 dark:bg-[#191a1f]">
                    <ReactEcharts
                      option={elm.chartdata}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
        );
      })}
  </>
  );
}
