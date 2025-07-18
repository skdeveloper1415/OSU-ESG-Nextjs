import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Work_Sans } from "next/font/google";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Sidebar } from 'primereact/sidebar';
import { MultiSelect } from 'primereact/multiselect';
import KpiConfigrationPopup from "../kpiconfigrationpopup";

const myworksans = Work_Sans({
 subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-work-sans' // Optional but recommended
});

export default function FilterComponent(props) {  
  const [kpiConfigrationPopup, setKpiConfigrationPopup] = useState(false)
  const [value, setValue] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  const [selectedDataSource, setSelectedDataSource] = useState(null);
  const [selectedGeography, setSelectedGeography] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedHalfYear, setSelectedHalfYear] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  const dataSource = [
    { name: "All",},
    { name: "Data 1",},
    { name: "Data 2",},
  ];
  const geography = [
    { name: "All",},
    { name: "Data 1",},
    { name: "Data 2",},
  ];
  const category = [
    { name: "All",},
    { name: "Data 1",},
    { name: "Data 2",},
  ];
  const type = [
    { name: "Order",},
    { name: "Data 1",},
    { name: "Data 2",},
  ];
  const year = [
    { name: "All",},
    { name: "Data 1",},
    { name: "Data 2",},
  ];
  const halfYear = [
    { name: "All",},
    { name: "Data 1",},
    { name: "Data 2",},
  ];
  const quarter = [
    { name: "All",},
    { name: "Data 1",},
    { name: "Data 2",},
  ];
  
  return (
    <div className="xl:sticky xl:top-[3.92vw] z-[4]">
      <div className="flex gap-4 items-center">
        <button className="bg-[#D73F09] py-[8px] xl:py-[0.833vw] px-[16px] xl:px-[1.04vw]  text-white rounded-[8px] xl:rounded-[0.417vw] text-[14px] xl:text-[0.833vw] font-medium xl:whitespace-nowrap" onClick={() => {setKpiConfigrationPopup(true)}}>KPI Configuration</button>
        <div className="w-full min-h-[65px] xl:min-h-[3.65vw] bg-white flex flex-wrap justify-between rounded-[8px] xl:rounded-[0.417vw] dark:bg-[#191A1E] pl-2 xl:pl-[0.833vw] xl:pr-[0.833vw] pr-2 shadow">
          <div className="flex flex-wrap justify-start items-center gap-1 pt-2 pb-1 xl:py-1">
            <div className=" lg:w-auto w-full">
              <div className="flex flex-wrap gap-[4px] items-center">
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[60px] hover:max-w-[85px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Cohort
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedGeography}
                      onChange={(e) => setSelectedGeography(e.value)}
                      options={geography}
                      optionLabel="name"
                      placeholder="2022"
                      className="min-w-[80px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[50px] hover:max-w-[75px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Term
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="Fall"
                      className="min-w-[70px]"
                    />
                  </div>
                </div>
                <span className="bg-[#F3F0E7] w-[2px] mx-[12px] xl:mx-[1.04vw] min-h-[48px]"></span>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[65px] hover:max-w-[90px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Campus
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.value)}
                      options={type}
                      optionLabel="name"
                      placeholder="Main"
                      className="min-w-[85px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] hover:max-w-[125px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Primary College
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.value)}
                      options={year}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[120px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[100px] hover:max-w-[125px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Second College
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[120px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[50px] hover:max-w-[75px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Major
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[70px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[65px] hover:max-w-[90px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Program
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[85px]"
                    />
                  </div>
                </div>
                <span className="bg-[#F3F0E7] w-[2px] mx-[12px] xl:mx-[1.04vw] min-h-[48px]"></span>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[60px] hover:max-w-[85px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Gender
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[80px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[50px] hover:max-w-[75px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Race
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[70px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[85px] hover:max-w-[110px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Honors Flag
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[105px]"
                    />
                  </div>
                </div>
                <div className="rounded pb-[4px] px-[12px] space-y-0 cursor-pointer max-w-[85px] hover:max-w-[110px] ease-in duration-300 overflow-hidden bg-[#F4F4F2] dark:bg-[#24262D]">
                  <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                  Athlete Flag
                  </span>
                  <div className="custDropdown">
                    <Dropdown
                      value={selectedHalfYear}
                      onChange={(e) => setSelectedHalfYear(e.value)}
                      options={halfYear}
                      optionLabel="name"
                      placeholder="All"
                      className="min-w-[105px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="text-[#9CA1AB] text-[14px] font-normal px-[12px] dark:text-[#B3B9C6]">
              <div className={myworksans.className}>No filter applied yet</div>
            </div>
            <Link
              href=""
              className="text-[#24262D] text-[12px] font-medium border border-[#ECEFF3] rounded-[8px] xl:rounded-[0.417vw] px-2 py-1.5 dark:text-white dark:border-[#363A44] hover:bg-[#F5F6F8] dark:hover:text-[black] dark:bg-[#24262D] dark:hover:bg-[#c3c3c6] "
              title="Add"
            >
              Add <i className="redingtonHR-pluse ml-1"></i>
            </Link> */}
          </div>
          <div className="flex xl:justify-end gap-2 xl:py-0 pt-1 pb-2 xl:w-auto w-full items-center">
            <Link
              href=""
              className="p-2 xl:text-end text-center self-center xl:w-auto w-1/2 group"
              title="Applied Filters"
            >
              <i className="osu-arrow-line-left text-[12px] text-[#6C768B] dark:text-[#B3B9C6] group-hover:text-[#D73F09]"></i>
              <div className="text-[#6C768B] dark:text-[#B3B9C6] group-hover:text-[#D73F09] text-[12px] font-normal leading-tight dark:text-[#B3B9C6]">
                <div  onClick={() => setKpiConfigrationPopup(true)} className={myworksans.className}>
                  Applied <br /> Filters
                </div>
              </div>
            </Link>
            <div className="rounded-r-[8px] xl:rounded-r-[0.417vw] flex items-center justify-center gap-2 px-[12px] xl:px-[0.833vw] py-[8px] xl:py-[0.730vw] bg-[#1F2A37] xl:w-auto w-1/2 cursor-pointer"
              
            >
              <i className="osu-filtersearch text-white text-[16px] xl:text-[1.25vw]"></i>
              <span className="text-[#FFF] text-[12px] font-normal leading-tight">
                <div className={myworksans.className}>
                  All <br /> Filters
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <KpiConfigrationPopup
            visible={kpiConfigrationPopup}
            onHide={() => {setKpiConfigrationPopup(false) }}
            
          />


    </div>
  );
}
