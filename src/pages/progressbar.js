import React, { useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';


export default function Index() {

  return (
    <div className='m-[50px]'>
        <div className="custom-progressbar relative">
            <ProgressBar value={75}></ProgressBar>
            <span className='indicator absolute top-[-2px] xl:top-[-0.100vw] left-[calc(75%-5px)] bg-[#53565A] rounded-lg w-[4px] xl:w-[0.208vw] h-[14px] xl:h-[0.730vw]'></span>
        </div>
    </div>

  );
}