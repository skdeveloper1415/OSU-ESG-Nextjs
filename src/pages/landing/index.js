import React, { useState, useRef } from "react";
import Image from "next/image";
import { Cormorant_SC, Roboto, Roboto_Slab, } from "@next/font/google";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landinghorizontalbarchart from "@/components/charts/landinghorizontalbarchart";
import { useTheme } from "next-themes";

const myRoboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const myRoboto_Slab = Roboto_Slab({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const myCormorant_SC = Cormorant_SC({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const CustomerCountData = {
    label: [
      "# First Yr Students",
      "#Jr Cohort Students",
      "# FTFT Cohort Students",
    ],
    value: [
      407,
      792,
      {
        value: 1163,
        itemStyle: {
          color: "#324DA6",
        },
      },
    ],
  };
  const CustomerCountData1 = {
    label: [
      "4Y FTFT Grad Rate",
      "6Y FTFT Grad Rate",
      "2Y Jr. Trans Cohort Grad Rate",
    ],
    value: [
      672,
      793,
      {
        value: 442,
        itemStyle: {
          color: "#324DA6",
        },
      },
    ],
  };
  const CustomerCountData2 = {
    label: [
      "1Y Student Retention (University)",
      "1Y Student Retention (College)",
      "Retention Achievement",
    ],
    value: [
      747,
      1050,
      {
        value: 3223,
        itemStyle: {
          color: "#324DA6",
        },
      },
    ],
  };
  const CustomerCountData3 = {
    label: [
      "DFW Credits",
      "DFW Rate",
      "Total Credit Hours",
    ],
    value: [
      1460,
      188,
      {
        value: 3251,
        itemStyle: {
          color: "#324DA6",
        },
      },
    ],
  };

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 2000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 2000,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 2000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 2000,
        },
      },
    ],
  };
  return (
    <>
      <div className={myRoboto.className}>
        <div className="landing-bg relative">
          <div className="pt-[15px] lg:pt-[34px] xl:pt-[2.604vw] px-[20px] md:px-[30px] xl:px-[4.583vw]">
            <div className="flex justify-between">
              <div className="col">
                <Link href={""}>
                  <Image
                    src="/assets/images/landing-logo.png"
                    width={200}
                    height={65}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col text-end">
                <div className="text-[18px] xl:text-[0.938vw] text-[#E8F0F3]">
                  Welcome John Simons
                </div>
                <div className="text-[14px] xl:text-[0.729vw] text-[#E8F0F3]">
                  <Link href={""}>Logout</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[16px] xl:bottom-[0.833vw] left-0 right-0">
            <div className="px-[20px] lg:px-[38px] xl:px-[1.979vw]">
              <div className="text-center">
                <div className="logoIcon mb-[10px] xl:mb-[0.521vw]">
                  <Image
                    src="/assets/images/landing-logo-icon.png"
                    width={114}
                    height={144}
                    alt="logo icon"
                    className="mx-auto"
                  />
                </div>
                <div className={myRoboto_Slab.className}>
                  <div className="text-[20px] md:text-[26px]  xl:text-[2.083vw] text-white font-light">
                    Welcome to <span className="font-semibold">OSU</span>
                  </div>
                  <div className={`${myCormorant_SC.className} text-[24px] md:text-[30px] xl:text-[2.500vw] text-white leading-[1.2]`}>
                    Every Student Graduates Dashboard
                  </div>
                  <div className="mt-[40px] xl:mt-[2.083vw] custTextLine relative max-w-fit mx-auto">
                    <div className="text-[16px] lg:text-[20px] xl:text-[1.250vw] text-white font-light">
                      Choose your Focus Area to view the Insights
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[30px] xl:mt-[1.042vw]">
                <div className="slider-wapper">
                  <Slider {...settings}>
                    <div className="col">
                      <div className="relative boxWapper">
                        <Image
                          src={"/assets/images/landing-img1.png"}
                          width={"351"}
                          height={"332"}
                          className="w-full"
                          alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="gradientOne w-full min-h-[112px] px-[16px] xl:px-[0.833vw] pb-[16px] xl:pb-[0.833vw]">
                            <div className="button mb-[24px] xl:mb-[1.250vw]">
                              <Link
                                href={"/collegeataglance"}
                                className="bg-[#324DA6] rounded-[50px] inline-block px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] text-[#FBF6F4] text-[16px] xl:text-[16px] font-semibold"
                              >
                                Open
                                <i className="osu-play text-[#E8F0F3] text-[12px] pl-[10px] xl:pl-[0.521vw]"></i>
                              </Link>
                            </div>
                            <div className="title text-[18px] xl:text-[1.250vw] text-white font-semibold leading-[1.2] mb-[5px] flex items-center">
                              Student Profile
                            </div>
                            <div className="text-[#E8F0F3] text-[14px] xl:text-[0.729vw] hoverText">
                              This module tracks and evaluates the success of
                              students throughout their educational journey,
                              including metrics such as retention rates, degree
                              completion, and graduation rates.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="bg-white p-[16px]">
                          <div className="text-[14px] xl:text-[0.729vw] font-medium mb-[14px] xl:mb-[0.729vw]">
                          Year (2023)
                          </div>
                          <div className="xl:h-[8.542vw] h-[164px] w-full">
                            <Landinghorizontalbarchart
                              legend={{
                                show: false,
                                icon: "roundRect",
                                bottom: "0%",
                                left: "0%",
                                itemWidth: 10,
                                itemHeight: 10,
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
                                color:
                                  currentTheme === "dark"
                                    ? "#FFFFFF"
                                    : "#53565A",
                                position: "outside",
                              }}
                              data={CustomerCountData}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="relative boxWapper">
                        <Image
                          src={"/assets/images/landing-img2.png"}
                          width={"351"}
                          height={"332"}
                          className="w-full"
                          alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="gradientOne w-full min-h-[112px] px-[16px] xl:px-[0.833vw] pb-[16px] xl:pb-[0.833vw]">
                            <div className="button mb-[24px] xl:mb-[1.250vw]">
                              <Link
                                href={"/collegeataglance"}
                                className="bg-[#324DA6] rounded-[50px] inline-block px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] text-[#FBF6F4] text-[16px] xl:text-[16px] font-semibold"
                              >
                                Open
                                <i className="osu-play text-[#E8F0F3] text-[12px] pl-[10px] xl:pl-[0.521vw]"></i>
                              </Link>
                            </div>
                            <div className="title text-[18px] xl:text-[1.250vw] text-white font-semibold leading-[1.2] mb-[5px] flex items-center">
                              Graduation
                            </div>
                            <div className="text-[#E8F0F3] text-[14px] xl:text-[0.729vw] hoverText">
                              This module tracks and evaluates the success of
                              students throughout their educational journey,
                              including metrics such as retention rates, degree
                              completion, and graduation rates.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="bg-white p-[16px]">
                          <div className="text-[14px] xl:text-[0.729vw] font-medium mb-[14px] xl:mb-[0.729vw]">
                          Year (2023)
                          </div>
                          <div className="xl:h-[8.542vw] h-[164px] w-full">
                            <Landinghorizontalbarchart
                              legend={{
                                show: false,
                                icon: "roundRect",
                                bottom: "0%",
                                left: "0%",
                                itemWidth: 10,
                                itemHeight: 10,
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
                                color:
                                  currentTheme === "dark"
                                    ? "#FFFFFF"
                                    : "#53565A",
                                position: "outside",
                              }}
                              data={CustomerCountData1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="relative boxWapper">
                        <Image
                          src={"/assets/images/landing-img3.png"}
                          width={"351"}
                          height={"332"}
                          className="w-full"
                          alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="gradientOne w-full min-h-[112px] px-[16px] xl:px-[0.833vw] pb-[16px] xl:pb-[0.833vw]">
                            <div className="button mb-[24px] xl:mb-[1.250vw]">
                              <Link
                                href={"/collegeataglance"}
                                className="bg-[#324DA6] rounded-[50px] inline-block px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] text-[#FBF6F4] text-[16px] xl:text-[16px] font-semibold"
                              >
                                Open
                                <i className="osu-play text-[#E8F0F3] text-[12px] pl-[10px] xl:pl-[0.521vw]"></i>
                              </Link>
                            </div>
                            <div className="title text-[18px] xl:text-[1.250vw] text-white font-semibold leading-[1.2] mb-[5px] flex items-center">
                              Retention
                            </div>
                            <div className="text-[#E8F0F3] text-[14px] xl:text-[0.729vw] hoverText">
                              This module tracks and evaluates the success of
                              students throughout their educational journey,
                              including metrics such as retention rates, degree
                              completion, and graduation rates.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="bg-white p-[16px]">
                          <div className="text-[14px] xl:text-[0.729vw] font-medium mb-[14px] xl:mb-[0.729vw]">
                          Year (2023)
                          </div>
                          <div className="xl:h-[8.542vw] h-[164px] w-full">
                            <Landinghorizontalbarchart
                              legend={{
                                show: false,
                                icon: "roundRect",
                                bottom: "0%",
                                left: "0%",
                                itemWidth: 10,
                                itemHeight: 10,
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
                                color:
                                  currentTheme === "dark"
                                    ? "#FFFFFF"
                                    : "#53565A",
                                position: "outside",
                              }}
                              data={CustomerCountData2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="relative boxWapper">
                        <Image
                          src={"/assets/images/landing-img4.png"}
                          width={"351"}
                          height={"332"}
                          className="w-full"
                          alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="gradientOne w-full min-h-[112px] px-[16px] xl:px-[0.833vw] pb-[16px] xl:pb-[0.833vw]">
                            <div className="button mb-[24px] xl:mb-[1.250vw]">
                              <Link
                                href={"/collegeataglance"}
                                className="bg-[#324DA6] rounded-[50px] inline-block px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] text-[#FBF6F4] text-[16px] xl:text-[16px] font-semibold"
                              >
                                Open
                                <i className="osu-play text-[#E8F0F3] text-[12px] pl-[10px] xl:pl-[0.521vw]"></i>
                              </Link>
                            </div>
                            <div className="title text-[18px] xl:text-[1.250vw] text-white font-semibold leading-[1.2] mb-[5px] flex items-center">
                              Academics
                            </div>
                            <div className="text-[#E8F0F3] text-[14px] xl:text-[0.729vw] hoverText">
                              This module tracks and evaluates the success of
                              students throughout their educational journey,
                              including metrics such as retention rates, degree
                              completion, and graduation rates.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="bg-white p-[16px]">
                          <div className="text-[14px] xl:text-[0.729vw] font-medium mb-[14px] xl:mb-[0.729vw]">
                          Year (2023)
                          </div>
                          <div className="xl:h-[8.542vw] h-[164px] w-full">
                            <Landinghorizontalbarchart
                              legend={{
                                show: false,
                                icon: "roundRect",
                                bottom: "0%",
                                left: "0%",
                                itemWidth: 10,
                                itemHeight: 10,
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
                                color:
                                  currentTheme === "dark"
                                    ? "#FFFFFF"
                                    : "#53565A",
                                position: "outside",
                              }}
                              data={CustomerCountData3}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="relative boxWapper">
                        <Image
                          src={"/assets/images/landing-img5.png"}
                          width={"351"}
                          height={"332"}
                          className="w-full"
                          alt=""
                        />
                        <div className="absolute bottom-0 left-0 right-0">
                          <div className="gradientOne w-full min-h-[112px] px-[16px] xl:px-[0.833vw] pb-[16px] xl:pb-[0.833vw]">
                            <div className="button mb-[24px] xl:mb-[1.250vw]">
                              <Link
                                href={"/collegeataglance"}
                                className="bg-[#324DA6] rounded-[50px] inline-block px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] text-[#FBF6F4] text-[16px] xl:text-[16px] font-semibold"
                              >
                                Open
                                <i className="osu-play text-[#E8F0F3] text-[12px] pl-[10px] xl:pl-[0.521vw]"></i>
                              </Link>
                            </div>
                            <div className="title text-[18px] xl:text-[1.250vw] text-white font-semibold leading-[1.2] mb-[5px] flex items-center">
                              Experiential Learning & Engagement
                            </div>
                            <div className="text-[#E8F0F3] text-[14px] xl:text-[0.729vw] hoverText">
                              This module tracks and evaluates the success of
                              students throughout their educational journey,
                              including metrics such as retention rates, degree
                              completion, and graduation rates.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="bg-white p-[16px]">
                          <div className="text-[14px] xl:text-[0.729vw] font-medium mb-[14px] xl:mb-[0.729vw]">
                          Year (2023)
                          </div>
                          <div className="xl:h-[8.542vw] h-[164px] w-full">
                            <Landinghorizontalbarchart
                              legend={{
                                show: false,
                                icon: "roundRect",
                                bottom: "0%",
                                left: "0%",
                                itemWidth: 10,
                                itemHeight: 10,
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
                                color:
                                  currentTheme === "dark"
                                    ? "#FFFFFF"
                                    : "#53565A",
                                position: "outside",
                              }}
                              data={CustomerCountData}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>

                {/* <div className="grid grid-cols-5 gap-[24px] xl:gap-[1.250vw]">
                  <div className="col">
                    <Image
                      src={"/assets/images/landing-img1.png"}
                      width={"351"}
                      height={"332"}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <Image
                      src={"/assets/images/landing-img2.png"}
                      width={"351"}
                      height={"332"}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <Image
                      src={"/assets/images/landing-img3.png"}
                      width={"351"}
                      height={"332"}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <Image
                      src={"/assets/images/landing-img4.png"}
                      width={"351"}
                      height={"332"}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <Image
                      src={"/assets/images/landing-img5.png"}
                      width={"351"}
                      height={"332"}
                      alt=""
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
