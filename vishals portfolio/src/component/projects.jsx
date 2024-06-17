
import React, { useState } from 'react'
import erp from '../assets/image/erp.jpg';
import compliance from '../assets/image/compliance.jpeg';
import inventory from '../assets/image/inventory.jpg';
import customer from '../assets/image/customer.jpg';
import steamline from '../assets/image/steamline.jpg';
import delivery from '../assets/image/delivery.jpeg'
function Project() {
    const [open1, setopen1] = useState(false);
    const [open2, setopen2] = useState(false);
    const [open3, setopen3] = useState(false);
    const [open4, setopen4] = useState(false);
    const [open5, setopen5] = useState(false);
    const [open6, setopen6] = useState(false);

    return (
        <>
            <div className="p-5 bg-[#ffffff00]" id='project'>
                <div className="mt-8 mb-5 ">
                    <h1 className="text-5xl font-bold text-center text-[#3b6893]">Exceptional Portfolio</h1>
                    <p className="font-sm text-[#3b6893] text-center mt-5">Streamlined and user-friendly and our interface ensures a seamless experience</p>
                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-8'>
                    <div className='w-1/3 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={steamline} alt="" className='rounded-lg h-72 w-full' />
                        <h1 className='text-xl text-[#3b6893] font-bold text-center mt-5 mb-3 cursor-pointer' onClick={() => setopen1(!open1)}>Streamlines Vehicle and Compliance Management</h1>

                        <p className={`text-justify text-[#3b6893] mt-3 ${open1 ? "h-auto" : "h-0 scale-0"} `}>
                        Vishal Rustagi harnessed Microsoft Power Platform to craft a robust digital solution for efficient vehicle management, featuring real-time tracking and monitoring for condition and fines. 
                        An accompanying app ensures policy compliance via digital signatures for car documents. Automation streamlines driver assignment for stock delivery,
                         with built-in reporting for updating vehicle status.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={erp} alt=""
                            className='rounded-lg h-72 w-full' />
                        <h1 className='text-xl text-[#3b6893] font-bold text-center mt-5 mb-3  cursor-pointer'  onClick={() => setopen2(!open2)}>Streamlines Manufacturing Process with a Low-Code ERP System</h1>                     
                        <p className={`text-justify text-[#3b6893] mt-3 ${open2 ? "h-auto" : "h-0 scale-0"}`}> Using low-code and no-code tools like Power Apps and Power Automate, Vishal Rustagi created a comprehensive ERP system for manufacturing. It integrates all production aspects for real-time visibility and management, automates manufacturing stages, and offers custom dashboards for detailed analytics, providing a holistic operational view.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={compliance} alt=""
                            className='rounded-lg h-72 w-full' />
                        <h1 className='text-xl text-[#3b6893] font-bold text-center mt-5 mb-3 cursor-pointer'  onClick={() => setopen3(!open3)}> Compliance Management System</h1>
                        <p className={`text-justify text-[#3b6893] mt-3 ${open3 ? "h-auto" : "h-0 scale-0"}`}>Vishal Rustagi implemented a robust compliance management system using Power Apps and Power Automate. This system streamlines the process of meeting regulatory requirements, significantly reducing the risk of non-compliance. By automating tasks and centralizing data, the system ensures a more efficient and effective approach to maintaining compliance.</p>
                    </div>

                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-10 mb-8'>

                    <div className='w-1/3 border-2 rounded-lg h-auto bg-white p-3 shadow-custom-blue'>
                        <img src={delivery} alt=""
                            className='rounded-lg h-72 w-full' />
                        <h1 className='text-xl text-[#3b6893] font-bold text-center mt-5 mb-3' onClick={() => setopen4(!open4)}> Delivery Management System</h1>
                        {/* <h2 className='text-xl text-[#3b6893] font-semibold text-center mt-4 mb-3'>Streamlining Business Operations</h2> */}
                        <p className={`text-justify text-[#3b6893] mt-3 ${open4 ? "h-auto" : "h-0 scale-0"}`}>Leveraging the efficiency of Power Apps and Power Automate, Vishal Rustagi crafted a robust delivery management system. This innovative solution automates scheduling and tracking of deliveries, guaranteeing customers receive their orders on time and accurately.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3 shadow-custom-blue'>
                        <img src={inventory} alt=""
                            className='rounded-lg h-72 w-full' />
                        <h1 className='text-xl text-[#3b6893] font-bold text-center mt-5 mb-3' onClick={() => setopen5(!open5)}> Inventory Management System </h1>
                        <p className={`text-justify text-[#3b6893] mt-3 ${open5 ? "h-auto" : "h-0 scale-0"}`}>Vishal leveraged Microsoft's Power Apps and Power Automate to create an inventory management system. This system offers real-time inventory tracking and automates stock management.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3 shadow-custom-blue'>
                        <img src={customer} alt=""
                            className='rounded-lg h-72 w-full' />
                        <h1 className='text-xl text-[#3b6893] font-bold text-center mt-5 mb-3' onClick={() => setopen6(!open6)}> Customer Management System </h1>
                        <p className={`text-justify text-[#3b6893] mt-3 ${open6 ? "h-auto" : "h-0 scale-0"}`}>Vishal built a customer management system using Power Apps and Power Automate. This system streamlines customer data management and enhances his ability to interact with customers.</p>
                    </div>
                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-10 mb-8'>

                </div>
            </div>
        </>
    )
}
export default Project;