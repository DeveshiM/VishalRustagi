import React,{useState} from 'react'

function Comments () {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array
    const slides = [0, 1, 2];
  
    // Function to handle next slide
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    };
  
    // Function to handle previous slide
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
    };
  
  
    return (
      <>
        <div
          className="flex justify-content-center items-center w-screen h-[500px] bg-blue-200 text-white overflow-hidden object-cover"
        >
          <div
            id="indicators-carousel"
            className="relative w-screen"
            data-carousel="static"
            
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-screen"
            >
              
    
              {/* <!-- Item 1 --> */}
              <div className="hidden duration-700 ease-in-out w-full"  data-carousel-item>
                <div
                  className="text-black w-full h-full object-cover"
                  alt={`Slide ${1}`}
                >
                  <div className="grid grid-cols-3 gap-4 px-4 w-full ">
                    <div className="bg-white p-5 text-justify  border-2 border-[#3b6893] shadow-md shadow-[#3b6893] py-3 px-3 rounded-2xl ">
                      <h1 className='text-xl font-semibold py-2'>Arko Chakrabarty</h1>
                      <h1 className='text-xl pb-3'>⭐⭐⭐⭐⭐</h1>
                      <p>Vishal Rustagi demonstrated excellence in architecting my application, offering a comprehensive vision from start to finish. His expertise in crafting detailed designs, spanning from logical architecture to API and schema, proved invaluable. Overall, Vishal Rustagi provided a robust framework with clear explanations, guiding me towards the optimal architecture for my application.</p>
                    </div>
                    <div className="bg-white p-5 text-justify border-2 border-[#3b6893] shadow-md shadow-[#3b6893] py-3 px-3 rounded-2xl">
                      <h1 className='text-xl font-semibold py-2'>Chris Germon</h1>
                      <h1 className='text-xl pb-3'>⭐⭐⭐⭐⭐</h1>
                      <p>I eagerly anticipate collaborating with Vishal Rustagi again, as he consistently demonstrates promptness and profound knowledge in our projects together. His timely responses and deep understanding have consistently contributed to our success, making him an invaluable partner for future endeavors.</p>
                    </div>
                    <div className="bg-white p-5 text-justify border-2 border-[#3b6893] shadow-md shadow-[#3b6893] py-3 px-3 rounded-2xl">
                      <h1 className='text-xl font-semibold py-2'>Redi Frasheri</h1>
                      <h1 className='text-xl pb-3'>⭐⭐⭐⭐⭐</h1>
                      <p>Working with Vishal Rustagi has been an outstanding experience, as he is among the finest professionals in the market. His expertise and dedication have consistently surpassed expectations, making him a top choice for any project or partnership.</p>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* <!-- Item 2 --> */}
              <div className="hidden duration-700 ease-in-out w-full" data-carousel-item>
                <div
                  className="text-black w-full h-full object-cover"
                  alt={`Slide ${2}`}
                >
                  <div className="grid grid-cols-3 gap-4 px-4 w-full ">
                    <div className="bg-white p-5 text-justify border-2 border-[#3b6893] shadow-md shadow-[#3b6893] py-3 px-3 rounded-2xl">
                      <h1 className='text-xl font-semibold  py-3'>John Xavier</h1>
                      <h1 className='text-xl pb-5'>⭐⭐⭐⭐⭐</h1>
                      <p>Vishal Rustagi consistently delivers exceptional Azure architectural solutions. His work is renowned for its superior quality, and his expertise in Azure is unmatched. We eagerly anticipate continuing our long-standing partnership with Vishal Rustagi for years to come.</p>
                    </div>
                    <div className="bg-white p-5 text-justify border-2 border-[#3b6893] shadow-md shadow-[#3b6893] py-3 px-3 rounded-2xl">
                      <h1 className='text-xl font-semibold py-3'>JC Anderson</h1>
                      <h1 className='text-xl pb-5'>⭐⭐⭐⭐⭐</h1>
                      <p>Vishal Rustagi and his team demonstrate true professionalism. They adeptly grasped the requirements, offered a precise estimate, and delivered promptly with outstanding quality. Communication throughout was exemplary.</p>
                    </div>
                    <div className="bg-white p-5 text-justify border-2 border-[#3b6893] shadow-md shadow-[#3b6893] py-3 px-3 rounded-2xl">
                      <h1 className='text-xl font-semibold py-3'>Sam Henry</h1>
                      <h1 className='text-xl pb-5'>⭐⭐⭐⭐⭐</h1>
                      <p className='pb-2'>Vishal Rustagi played a pivotal role in setting up Azure pipelines and infrastructure for both production and lower environments. He demonstrated responsiveness and deep expertise, acting not just as an executor of tasks but as a collaborative partner who provided valuable insights to improve workflows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Slider indicators */}
            <div className="absolute flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-400"
                  }`}
                  aria-current={index === currentSlide ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                />
              ))}
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
              data-carousel-prev=""
              onClick={prevSlide}
            >
              {/* Previous button content */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
              data-carousel-next=""
              onClick={nextSlide}
            >
              {/* Next button content */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        
        </>
      );
}

export default Comments
