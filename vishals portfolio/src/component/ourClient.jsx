// import React from 'react';
import img1 from '../assets/image/image-1.png'
import img2 from '../assets/image/image-2.png'
import img3 from '../assets/image/image-3.png'
import img4 from '../assets/image/image-4.jpg'
import img5 from '../assets/image/image-5.jpg'
import img6 from '../assets/image/image-6.png'
import img7 from '../assets/image/image-7.png'
import img8 from '../assets/image/image-8.jpg'
import img9 from '../assets/image/image-9.jpg'
import img10 from '../assets/image/image-10.png'
import img11 from '../assets/image/image-11.png'
import img12 from '../assets/image/image-12.png'
import img13 from '../assets/image/image-13.png'
import img14 from '../assets/image/image-14.png'
import img15 from '../assets/image/image-15.png'

 function ourClient(){
    return (
        <>
            <div className='' id='client'>
                <div className='p-5 mx-10'>
                    <div>
                        <h1 className='py-5 pb-5 text-[#3b6893] text-5xl text-center font-bold'>Our Clients</h1>
                    </div>
                    <div className='flex p-8 text-center justify-between'>
                        <div  >
                            <img src={img1} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img2} alt="" className='h-16 w-40' />
                        </div>
                        <div  >
                            <img src={img3} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img4} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img5} alt="" className='h-16 w-40'/>
                        </div>

                    </div>
                    <div className='flex p-8 text-center justify-between'>
                        <div  >
                            <img src={img6} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img7} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img8} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img9} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img10} alt="" className='h-16 w-40'/>
                        </div>

                    </div>
                    <div className='flex p-8 text-center justify-between'>
                        <div  >
                            <img src={img11} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img12} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img13} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img14} alt="" className='h-16 w-40'/>
                        </div>
                        <div  >
                            <img src={img15} alt="" className='h-16 w-40'/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
 }
 export default ourClient;