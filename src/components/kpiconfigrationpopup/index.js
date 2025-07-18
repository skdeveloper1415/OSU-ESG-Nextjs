import { Sidebar } from "primereact/sidebar";
import * as PropTypes from "prop-types";
import { useState } from "react";
import { Inter } from 'next/font/google'
import { RadioButton } from "primereact/radiobutton";

const myInter = Inter({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-inter' // Optional but recommended
})

function KpiConfigrationPopup(props) {
    const [checked, setChecked] = useState(false);
    const [ingredient, setIngredient] = useState('');

    return <Sidebar visible={props.visible} onHide={props.onHide} position="left" className="kpisidebar sidebar-w-530" style={{ boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', background: '#FFF', border: '1px solid #EAEDF3' }}>
        <div className={myInter.className}>
            <div className="xl:px-[1.250vw] px-5 xl:py-[0.990vw] py-4">
                {/**Header**/}
                <div onClick={props.onClick} className="text-[#363A44] cursor-pointer text-lg pb-2"><i className="osu-arrow-close"></i></div>
                <div className="text-[#374151] font-semibold xl:text-[1.250vw] text-[24px] pb-3">KPI Configuration</div>
               <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.729vw] rounded-lg mb-[24px] xl:mb-[1.250vw]">
                  <div className="text-[#242526] text-[16px] xl:text-[0.833vw] font-semibold px-[8px] border-b border-b-[#53565A] pb-[12px] xl:pb-[0.729vw]">Student Profile</div>
                  <div className="px-[8px]">
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient1" name="pizza" value="std1" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std1'} />
                    <label htmlFor="ingredient1" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># Students in FTFT Cohort</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient2" name="pizza" value="std2" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std2'} />
                    <label htmlFor="ingredient2" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># Students in Jr Transfer</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std3" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std3'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  </div>
               </div>
               <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.729vw] rounded-lg mb-[24px] xl:mb-[1.250vw]">
                  <div className="text-[#242526] text-[16px] xl:text-[0.833vw] font-semibold px-[8px] border-b border-b-[#53565A] pb-[12px] xl:pb-[0.729vw]">Student Profile</div>
                  <div className="px-[8px]">
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient1" name="pizza" value="std4" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std4'} />
                    <label htmlFor="ingredient1" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1Y FTFT Retention</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient2" name="pizza" value="std2" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std2'} />
                    <label htmlFor="ingredient2" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># Students in Jr Transfer</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std3" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std3'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std3" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std3'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std4" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std4'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std5" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std5'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std6" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std7'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  </div>
               </div>
               <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.729vw] rounded-lg mb-[24px] xl:mb-[1.250vw]">
                  <div className="text-[#242526] text-[16px] xl:text-[0.833vw] font-semibold px-[8px] border-b border-b-[#53565A] pb-[12px] xl:pb-[0.729vw]">Student Profile</div>
                  <div className="px-[8px]">
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient1" name="pizza" value="std4" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std4'} />
                    <label htmlFor="ingredient1" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1Y FTFT Retention</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient2" name="pizza" value="std2" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std2'} />
                    <label htmlFor="ingredient2" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># Students in Jr Transfer</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std3" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std3'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std3" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std3'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std4" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std4'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std5" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std5'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient3" name="pizza" value="std6" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std7'} />
                    <label htmlFor="ingredient3" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># 1st Year Students</label>
                  </div>
                  </div>
               </div>
               <div className="bg-[#F4F4F4] p-[12px] xl:p-[0.729vw] rounded-lg mb-[24px] xl:mb-[1.250vw]">
                  <div className="text-[#242526] text-[16px] xl:text-[0.833vw] font-semibold px-[8px] border-b border-b-[#53565A] pb-[12px] xl:pb-[0.729vw]">Academics</div>
                  <div className="px-[8px]">
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient1" name="pizza" value="std4" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std4'} />
                    <label htmlFor="ingredient1" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># Prev Term DFWU Courses</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient2" name="pizza" value="std2" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std2'} />
                    <label htmlFor="ingredient2" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]"># Prev Term DFWU Units</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient1" name="pizza" value="std4" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std4'} />
                    <label htmlFor="ingredient1" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]">% of Classes with DFU</label>
                  </div>
                  <div className="mt-[8px] pb-[8px] border-b border-b-[#E6E3D9]">
                    <RadioButton inputId="ingredient2" name="pizza" value="std2" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'std2'} />
                    <label htmlFor="ingredient2" className="ml-5 xl:ml-[1.042vw] text-[14px] xl:text-[0.729vw] font-normal text-[#A7A9AE]">% of Classes with W</label>
                  </div>
                 
                  </div>
               </div>
            </div>
        </div>
    </Sidebar>
}

KpiConfigrationPopup.propTypes = {
    visible: PropTypes.bool,
    onHide: PropTypes.func,
    value: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.any,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default KpiConfigrationPopup;