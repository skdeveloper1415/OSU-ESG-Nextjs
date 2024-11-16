import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import RetentionMigration from "./retention";
import Layout from "@/components/layout/layout";
import { useState } from "react";

const DetailedAnalysis = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <Layout pageTitle="Retention Details">
        <div className="">
          <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <div className="grid gap-[24px] xl:gap-[1.250vw] mt-8 xl:mb-[1.667vw] mb-[32px]">
              <div className="grid grid-cols-12 gap-4">
                <div className="flex flex-col col-span-3 bg-white rounded-[12px]">
                  <div className="text-[20px] xl:text-[1.042vw] font-semibold text-[#53565A] p-4">
                    Select Focus area
                  </div>
                  <div className="detailedLeftTabs p-[16px] xl:p-[0.833vw] cursor-pointer">
                    <TabList>
                      <Tab>
                        <div className={`flex items-center retentionbtn font-medium text-[16px] mb-2 ${activeTab === 0 ? 'bg-[#D73F09] text-white active' : 'bg-[#F4F4F4] hover:bg-[#ebf6ff] text-black'}`}>
                          Retention by Pell
                        </div>
                      </Tab>
                      <Tab>
                        <div className={`flex items-center radioButtonDesign font-medium text-[16px] mt-2 ${activeTab === 1 ? 'bg-[#D73F09] text-white active' : 'bg-[#F4F4F4] hover:bg-[#ebf6ff] text-black'}`}>
                          Retention by Student of Color
                        </div>
                      </Tab>
                      <Tab>
                        <div className={`flex items-center radioButtonDesign font-medium text-[16px] mt-2 ${activeTab === 2 ? 'bg-[#D73F09] text-white active' : 'bg-[#F4F4F4] hover:bg-[#ebf6ff] text-black'}`}>
                          Graduation Type Trend
                        </div>
                      </Tab>
                      <Tab>
                        <div className={`flex items-center radioButtonDesign font-medium text-[16px] mt-2 ${activeTab === 3 ? 'bg-[#D73F09] text-white active' : 'bg-[#F4F4F4] hover:bg-[#ebf6ff] text-black'}`}>
                          Retention by Gender
                        </div>
                      </Tab>
                      <Tab>
                        <div className={`flex items-center radioButtonDesign font-medium text-[16px] mt-2 ${activeTab === 4 ? 'bg-[#D73F09] text-white active' : 'bg-[#F4F4F4] hover:bg-[#ebf6ff] text-black'}`}>
                        Top 10 Majors with Retention
                        </div>
                      </Tab>
                      <Tab>
                        <div className={`flex items-center radioButtonDesign font-medium text-[16px] mt-2 ${activeTab === 5 ? 'bg-[#D73F09] text-white active' : 'bg-[#F4F4F4] hover:bg-[#ebf6ff] text-black'}`}>
                          New Students Analysis
                        </div>
                      </Tab>
                    </TabList>
                  </div>
                </div>
                <div className="grid col-span-9">
                  <div className="">
                    <TabPanel>
                      <RetentionMigration />
                    </TabPanel>
                    <TabPanel>
                      <RetentionMigration />
                    </TabPanel>
                    <TabPanel>
                      <RetentionMigration />
                    </TabPanel>
                    <TabPanel>
                      <RetentionMigration />
                    </TabPanel>
                    <TabPanel>
                      <RetentionMigration />
                    </TabPanel>
                    <TabPanel>
                      <RetentionMigration />
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </Layout>
    </>
  );
};
export default DetailedAnalysis;
