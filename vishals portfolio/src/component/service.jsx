
import React from 'react'
import cloud from '../assets/image/cloud.jpg';
import uiux from '../assets/image/uiux.jpg';
import app from '../assets/image/appDevelopment.jpg';
import automation from '../assets/image/automation.jpg';
import consult from '../assets/image/consulting.jpg';
import data from '../assets/image/data.jpg'

 function Cservice (){
    return (
        <>
            <div className="p-5 bg-[#3b6893]" id='service'>
                <div className="mt-8 mb-8 "> 
                    <h1 className="text-5xl font-bold text-center text-white">Enterprise Digital Transformation Services</h1>
                    <p className="font-sm text-white text-center mt-5">Offering expertise to envision and architect enterprise-wide digital solutions on cloud and leverage latest technologies for data, AI, automation and app mod.</p>
                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-10'>
                    <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3'>
                        <img src={cloud} alt=""
                        className='rounded-lg h-56 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Cloud Services</h1>
                        <p className='text-justify text-[#3b6893] mt-5'>Design and build solutions on Azure, AWS and GCP leveraging PaaS, SaaS, serverless and open source technologies.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3'>
                        <img src={automation} alt=""
                        className='rounded-lg h-56 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Automation</h1>
                        <p className='text-justify text-[#3b6893] mt-5'>Automate business processes and tasks using RPA, workflows, logic apps, functions, chatbots and conversational AI.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3'>
                        <img src={data} alt=""
                        className='rounded-lg h-56 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Data & Analytics</h1>
                        <p className='text-justify text-[#3b6893] mt-5'>Implement data platform, analytics and BI solutions using SQL, CosmosDB, Databricks, Synapse Analytics and Power BI.</p>
                    </div>
                    
                </div>
                <div className='flex space-x-8 mx-10 px-32 mt-10 mb-8'>
                <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3'>
                        <img src={app} alt=""
                        className='rounded-lg h-56 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> App Development</h1>
                        <p className='text-justify text-[#3b6893] mt-5'>Build web, mobile, desktop apps and portals using .NET, Java, JavaScript, React, Xamarin, Power Apps and other low code platforms.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3'>
                        <img src={consult} alt=""
                        className='rounded-lg h-56 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> Consulting</h1>
                        <p className='text-justify text-[#3b6893] mt-5'>Provide consulting on cloud adoption, enterprise architecture, solution design, delivery, team setup and management.</p>
                    </div>
                    <div className='w-1/3 border-2 rounded-lg h-34 bg-white p-3'>
                        <img src={uiux} alt=""
                        className='rounded-lg h-56 w-full' />
                        <h1 className='text-2xl text-[#3b6893] font-bold text-center mt-5 mb-3'> UI/UX Design</h1>
                        <p className='text-justify text-[#3b6893] mt-5'>Craft intuitive and visually stunning user interfaces for web, mobile, and desktop applications using Figma, Sketch, Adobe XD, and other leading design tools.</p>
                    </div>
                </div>
            </div>
        </>
    )
 }
 export default Cservice;