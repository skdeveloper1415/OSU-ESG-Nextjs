import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';


export default function Top({ ...pageProps }) {
    const notificatio = useRef(null);

    return (
        <header className="sticky top-0 z-[3]">
            <div className="bg-white flex items-center justify-between pt-[20px] xl:pt-[1.04vw] pb-[20px] xl:pb-[1.04vw] pr-4 xl:pr-[1.667vw] pl-[118px] xl:pl-[128px] dark:bg-[#191A1E]">
                <div className="">
                    <div className="flex items-center gap-2 text-[12px] xl:text-[0.625vw] text-[#A7A9AE] mb-1 xl:mb-[0.208vw]">
                        <div className="cursor-pointer">Home</div>
                        <i className="osu-arrow-open-right text-[8px] xl:text-[0.417vw]"></i>
                        <div className="cursor-pointer">Page 1</div>
                        <i className="osu-arrow-open-right text-[8px] xl:text-[0.417vw]"></i>
                        <div className="cursor-pointer">Page 2</div>
                        <i className="osu-arrow-open-right text-[8px] xl:text-[0.417vw]"></i>
                        <div className="text-[#242526]">{pageProps.pageTitle}</div>
                    </div>
                    <div className="text-[#242526] xl:text-[1.250vw] text-xl font-semibold leading-7 dark:text-[#fff]">{pageProps.pageTitle}</div>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={''} className="xl:p-[0.625vw]" title="Cart">
                        <Image src={'/assets/images/svg/shopping-cart.svg'} width={24} height={28} alt="Shopping cart" />
                    </Link>
                    <Link href={''} className="xl:p-[0.625vw]" title="Message"><Image src={'/assets/images/svg/messages.svg'} width={24} height={28} alt="Message" /></Link>
                    <Link href={''} className="xl:p-[0.625vw]" onClick={(e) => notificatio.current.toggle(e)} title="Notification"><Image src={'/assets/images/svg/notificatio-bell.svg'} width={24} height={28} alt="Notification" /></Link>
                </div>
            </div>

            <OverlayPanel ref={notificatio} className="notificatio_popup">
                <div className=''>
                    <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
                        <div className="flex items-center justify-between">
                            <div className="text-[#293141] dark:text-[#FFFFFF] text-sm lg:text-md 2xl:text-lg font-bold">Notifications</div>
                        </div>
                        <SimpleBar className="pr-4" style={{ maxHeight: '300px', }}>
                            <div className="mt-5 divide-y divide-solid divide-[#D8D8D8] dark:divide-[#2A2C32] list-space" data-simplebar>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </OverlayPanel>


        </header>
    );
}
