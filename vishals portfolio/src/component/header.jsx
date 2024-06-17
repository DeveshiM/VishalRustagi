import React from 'react'
function Navbar(){
    return(
        <>
        <nav className="bg-inherit fixed right-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-bold flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  ">
        <li>
          <a href="#" className="block py-2 px-3  rounded md:bg-transparent md:text-blue-400 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#about" className="block py-2 px-3  rounded  md:border-0 md:hover:text-blue-400 md:p-0 dark:text-red-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#service" className="block py-2 px-3  rounded  md:border-0 md:hover:text-blue-400 md:p-0 dark:text-red-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#project" className="block py-2 px-3  rounded  md:border-0 md:hover:text-blue-400 md:p-0 dark:text-red-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="#client" className="block py-2 px-3  rounded  md:border-0 md:hover:text-blue-400 md:p-0 dark:text-red-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Clients</a>
        </li>
        <li>
          <a href="/sample" className="block py-2 px-3  rounded  md:border-0 md:hover:text-blue-400 md:p-0 dark:text-red-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">UI/UX</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
 }
export default Navbar