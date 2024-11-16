import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import { ProgressBar } from "primereact/progressbar";

export default function MontlyPerformance(props) {


  return (
  <>
      {props.data.map((elm) => {
        return (
          <Link href="" onClick={() => {props.setEmployeeperformancedetails(true)}} className="rounded-[0.833vw] bg-[#fff] dark:bg-[#191A1E] emp-box-shadow  xl:p-[0.833vw] p-[16px]">
            <div className="flex xl:gap-[0.625vw] gap-[12px]">
              <Image
                src={"/assets/images/emp-1.png"}
                className="xl:w-[2.500vw] w-[48px] xl:h-[2.500vw] h-[48px]"
                width={48}
                height={48}
                alt="emp"
              />
              <div>
                <h4 className="text-[#363A44] dark:text-white xl:text-[0.833vw] text-[16px] font-semibold">
                  {elm.empname}
                </h4>
                <div className="text-[#6C768B] dark:text-[#B3B9C6] xl:text-[0.729vw] text-[14px] font-normal">
                  {elm.subtitle}
                </div>
              </div>
            </div>
            <div className="text-[#363A44] dark:text-[#FFFFFF] xl:text-[0.625vw] text-[12px] font-normal my-2">
              Montly Performance
            </div>
            <div className="space-y-[0.833vw] xl:space-y-[16px]">
              <div className="progress_custom ">
                <h6 className="text-[#363A44] dark:text-[#FFFFFF] xl:text-[0.729vw] text-[14px] font-normal">
                  Total Task Completed
                </h6>
                <div className="xl:mt-[0.260vw] mt-[10px] color_green">
                  <ProgressBar value={50}></ProgressBar>
                </div>
                <p className="text-[#6C768B] dark:text-[#B3B9C6] xl:text-[0.573vw] text-[11px] font-normal leading-6">
                  2.5k Hrs Available
                </p>
              </div>
              <div className="progress_custom">
                <h6 className="text-[#363A44] dark:text-[#FFFFFF] xl:text-[0.729vw] text-[14px] font-normal">
                  Total Task Pending
                </h6>
                <div className="xl:mt-[0.260vw] mt-[10px] color_grey">
                  <ProgressBar value={60}></ProgressBar>
                </div>
                <p className="text-[#6C768B] dark:text-[#B3B9C6] xl:text-[0.573vw] text-[11px] font-normal leading-6">
                  2.5k Hrs Available
                </p>
              </div>
              <div className="progress_custom">
                <h6 className="text-[#363A44] dark:text-[#FFFFFF] xl:text-[0.729vw] text-[14px] font-normal">
                  % of tasks more than TAT
                </h6>
                <div className="xl:mt-[0.260vw] mt-[10px] color_blue">
                  <ProgressBar value={40}></ProgressBar>
                </div>
                <p className="text-[#6C768B] dark:text-[#B3B9C6] xl:text-[0.573vw] text-[11px] font-normal leading-6">
                  2.5k Hrs Available
                </p>
              </div>
            </div>
          </Link>
        );
      })}
  </>
  );
}
