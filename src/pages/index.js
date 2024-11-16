import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Checkbox } from "primereact/checkbox";


export default function Index() {

  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Head>
        <title>Oregon State University</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className='bg-[#FAF9F9]'>
        <div className='flex items-center justify-between py-[16px] px-[115px] xl:py-[0.833vw] xl:px-[5.990vw] bg-[#FAF9F9] border-[1px] border-[#E6E3D9] z-[999999]'>
          <div>
            <Image
              src="/assets/images/login_headerlogo.svg"
              width="24"
              height="24"
              className="w-[10.365vw]"
              alt=""
            />
          </div>
          <div className='text-[16px] xl:text-[0.833vw] font-semibold px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-[8px] cursor-pointer text-[#FFFFFF] bg-[#1F2A37]'>
            Contact Us
          </div>
        </div>
        <div className="flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-0">
          <div className="flex flex-wrap flex-row justify-center auto-rows-max xl:pt-[5.958vw]">
          <div className=" max-w-md 2xl:max-w-lg w-full p-2">
                <form autoComplete="off">
                  <div className="mb-[26px] xl:mb-[1.354vw]">
                    <h2 className="text-[24px] xl:text-[1.875vw] font-semibold text-[#242526]">Login</h2>
                    <div className="text-[#53565A] text-[18px] xl:text-[0.938vw] font-medium pt-2">Provide your credentials to proceed, please.</div>
                  </div>

                  <div className="relative  mb-2 xl:mb-[0.781vw] loginInput">
                    <div className="pb-2 "><label htmlFor="" className="text-[#344054] text-sm font-medium">Email</label></div>
                    <InputText 
                      id="" 
                      className="w-full placeholder:text-[#667085] placeholder:text-sm" 
                      placeholder="olivia@mail.com" 
                    />
                  </div>

                  <div className="relative mb-2 xl:mb-[0.781vw] custPassword loginInput">
                    <div className="py-2"><label htmlFor="username" className="text-[#344054] text-sm font-medium">Password</label></div>
                    <Password 
                      value={value} 
                      onChange={(e) => setValue(e.target.value)} 
                      toggleMask 
                      placeholder="***********" 
                      className="w-full placeholder:text-[#667085] placeholder:text-sm" 
                    />
                  </div>

                  <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                      <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                      <label htmlFor="ingredient1" className="ml-2 text-[#53565A] text-[14px] font-medium">Remember me</label>
                    </div>
                    <div>
                      <Link href="" className="text-[#2B407D] font-medium text-[12px] hover:underline" >Forgot password?</Link>
                    </div>
                  </div>

                  <div className="flex w-full mt-[26px] xl:mt-[1.354vw] mb-[16px] xl:mb-[0.833vw]">
                    <Link href={'/landing'} className="text-[#FFFFFF] text-[16px] xl:text-[0.833vw] bg-[#D73F09] hover:bg-[#972c06] rounded-lg w-full text-center py-[12px] xl:py-[0.625vw]">Login</Link>
                  </div>

                  <div className='flex items-center justify-center text-[#A7A9AE] text-[15px] xl:text-[0.781vw] font-normal text-center mb-[16px] xl:mb-[0.833vw]'><div className='border-[1px] w-[120px] xl:w-[6.250vw] border-[#E6E3D9]'></div>&nbsp; Or Sign in with Google &nbsp;<div className='border-[1px] w-[120px] xl:w-[6.250vw] border-[#E6E3D9]'></div></div>

                  <div className="flex w-full mb-[40px] xl:mb-[2.083vw]">
                    <Link href={'/'} className="flex items-center justify-center gap-2 text-[#53565A] bg-[#FFFFFF] border-[1px] border-[#E6E3D9] text-[16px] xl:text-[0.833vw] rounded-lg w-full text-center py-[12px] xl:py-[0.625vw] ">
                    <Image
                        src="/assets/images/Google_icon.png"
                        width="24"
                        height="24"
                        className=""
                        alt=""
                      /> 
                      Sign in with Google</Link>
                  </div>

                  <div className="flex items-center justify-center mb-8 xl:mb-[2.083vw] text-[16px] xl:text-[0.833vw] font-medium text-[#A7A9AE]">
                    Not Registered Yet?
                    <Link href='/' className="ml-2 font-medium text-[#2B407D] hover:text-[#2B407D]">
                      Create account.
                    </Link>
                  </div>

                </form>
              </div>
          </div>

          <div className="">
            <div className=" login-wrap-bg h-screen">
            </div>
          </div>
        </div>
      </div>
    </>

  );
}