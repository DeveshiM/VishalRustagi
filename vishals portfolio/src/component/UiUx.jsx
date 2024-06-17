
import React from 'react'
import sample1 from '../assets/image/sample1.png'
import sample2 from '../assets/image/sample2.png'
import sample3 from '../assets/image/sample3.png'
import sample4 from '../assets/image/sample4.png'
import sample5 from '../assets/image/sample5.png'
import sample6 from '../assets/image/sample6.png'

function Uiux(){
    return(
        <>
            <div className='pt-5 px-10'>
                <div className='text-center text-5xl font-bold text-[#3b6893]  py-10'>UI/UX Projects</div>
                <div className='flex space-x-10 py-10'>
                    <div className='w-1/2 border-2 text-center shadow-lg shadow-[#3b6893] rounded-lg'>
                    <a href='https://1788doublebay.com.au/team/' >
                        <img src={sample1} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>DOUBLE BAY RESIDENCY</h1>
                    
                    </a>
                    </div>
                    <div className='w-1/2 border-2 text-center shadow-lg shadow-[#3b6893] rounded-lg'>
                    <a href='https://kingandphillip.com.au/' >
                        <img src={sample2} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>KING & PHILLIPS RESIDENCY</h1>
                       
                    </a>
                    </div>
                </div>
                <div className='flex space-x-10 py-10'>
                    <div className='w-1/2 border-2 text-center shadow-lg shadow-[#3b6893]  rounded-lg'>
                    <a href='https://ozonecronulla.com.au/' >
                        <img src={sample3} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>Coastal Living Redefined</h1>
                        
                    </a>
                    </div>
                    <div className='w-1/2 border-2 text-center rounded-lg  shadow-lg shadow-[#3b6893]'>
                    <a href='https://coburgcollective.com.au/' >
                        <img src={sample4} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>COBURG COLLECTIVE</h1>
                        
                    </a>
                    </div>
                </div>
                <div className='flex space-x-10 py-10'>
                    <div className='w-1/2 border-2 text-center shadow-lg shadow-[#3b6893]  rounded-lg'>
                    <a href='https://scarlettpoppies.com/' >
                        <img src={sample5} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>SCARLETT POPPIES</h1>
                        
                    </a>
                    </div>
                    <div className='w-1/2 border-2 text-center rounded-lg  shadow-lg shadow-[#3b6893]'>
                    <a href='https://www.thestylishgift.com.au/' >
                        <img src={sample6} alt="" className='w-full h-auto' />
                        <h1 className='text-2xl py-2'>THE STYLISH GIFT</h1>
                        
                    </a>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default Uiux;