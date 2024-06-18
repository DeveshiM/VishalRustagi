import React from 'react';
import banner from '../assets/image/Vishal Rustagi.png'
import profile from '../assets/image/vishal rustagi.jpeg'
import Navbar from './header';
function Banner(){
    return(
        <>
            <div className=''>
               <Navbar/>
                <img src={banner} alt="" className='w-screen h-[600px] content-fixed' />
                
            </div>
            <div id='about' >
            <div className='my-20' >
            <div className='flex p-8 '>
                
                <div className='basis-3/4 px-20 text-xl text-justify font-semibold'>
                
                Hi, I'm Vishal from India!  <br/>
                With over 10 years of expertise in software development and cloud transformation,<br/> I'm here to elevate your business with cutting-edge, scalable, cloud-based applications.
                <br/>
                Are you in need of an experienced Azure and Full Stack Developer? <br/>Look no further! My extensive background in full-stack development and mastery 
                <br/>of Microsoft Azure ensures top-notch solutions for your needs.
                <br/><br/>
                <li className='text-base '>🌟 TOP-RATED Developer on Upwork</li>
                <li className='text-base'>💯 Exceptional Job Success Score </li>
                <li className='text-base'>🔹 Highly Recommended by Clients </li>
                <li className='text-base'>⏱️ Reliable On-Time Delivery</li>
                <br/>
                </div>
                <div className='basis-1/3 px-8 pr-20'>
                    <img src={profile} alt="" className='border-8 rounded-full border-[#3b6893] h-80 w-80 shadow-2xl' />

                </div>
            </div>
            <div className='flex px-8 '>
                <div className='basis-1/3 pl-20 text-xl text-justify'>
                    <h1 className='text-xl text-[#3b6893] font-bold'> My Specializations:</h1><br/>
                    <p className='text-base text-justify font-semibold'><li>Power Platform</li>
                        <li>Azure DevOps</li>
                        <li>Cloud Native Architecture</li>
                        <li>Event Driven Architecture</li>
                        <li>Microservices</li>
                        <li>Low Code/No Code Solutions</li>
                        <li>Teams App Development</li>
                        <li>Office 365 Consultancy</li>
                    </p>
                </div>
                <div className='basis-2/3 pr-10 text-xl text-justify'>
                    <h1 className='text-xl text-[#3b6893] font-bold'> My Skill Set Includes:</h1><br/>
                    <p className='text-base text-justify font-semibold'>
                        <li> Crafting modern web applications with JavaScript, HTML, CSS, and frameworks like React or Angular.</li>
                        <li> Designing and implementing scalable APIs and microservices architecture.</li>
                        <li> Integrating a variety of Azure services, including Azure Storage, Azure SQL Database, and Azure Cosmos DB.</li>
                        <li> Deploying applications on the Microsoft Azure cloud platform, utilizing services such as Azure Functions, Azure App Service, and Azure DevOps.</li>
                        
                    </p>
                </div>
                        {/* <li> Crafting modern web applications with <b>JavaScript, HTML, CSS</b>, and frameworks like <b>React</b> or <b>Angular</b>.</li>
                        <li> Designing and implementing scalable <b>APIs</b> and <b>microservices architecture</b>.</li>
                        <li> Integrating a variety of Azure services, including <b>Azure Storage</b>, <b>Azure SQL Database</b>, and <b>Azure Cosmos DB</b>.</li>
                        <li> Deploying applications on the <b>Microsoft Azure cloud platform</b>, utilizing services such as <b>Azure Functions</b>, <b>Azure App Service</b>, and <b>Azure DevOps</b>.</li> */}
            </div>
            <div className='text-2xl text-center text-[#3b6893] mt-8 font-bold'>
                Thank you for considering my profile!<br/>
                Lets work together to bring your vision to life<br/>
                </div>
            </div>
            </div>
        </>
    )
}
export default Banner;

  
              