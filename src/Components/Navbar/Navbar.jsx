import React from 'react'
import { IoMdSearch} from "react-icons/io"
import { FaCaretDown, FaCaretShopping } from "react-icons/fa"
import DarkMode from "./DarkMode"

import Logo from "../../assets/logo.png"

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Cut Pices",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Women Wear",
      link: "/#",
    },
  ];
  
  const DropdownLinks = [
    {
      id: 1,
      name: "Boski",
      link: "/#",
    },
    {
      id: 2,
      name: "Crundi",
      link: "/#",
    },
    {
      id: 3,
      name: "Wash & Wear",
      link: "/#",
    },
    {
        id: 4,
        name: "Cutton",
        link: "/#",
      },
      {
        id: 5,
        name: "Khadarr",
        link: "/#",
      },
  ];

const Navbar = () => {
  return (
    <div className=' shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className="py-2 bg-primary/40 ">
            <div className="container flex justify-center items-center">
                <div>
                    <a href="#" className="flex font-bold text-2xl sm:text-3xl gap-2">
                        <img src={Logo} alt="logo" className="w-10" />
                        Khalid
                    </a>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <div className="relative group hidden sm:block">
                        <input 
                        type="text" 
                        placeholder='Search'
                        className="w-[200px] sm:w-[300px] group-hover:w-[300px] sm:group-hover:w-[400px] md:w-[400px] md:group-hover:w-[500px] transition-all duration-300 rounded-full border border-green-300 px-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800" />
                        <IoMdSearch className=" text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                    </div>
                    <button 
                        className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                    >
                        <span className=" group-hover:block hidden transition-all duration-200">
                            Order
                        </span>
                        <FaCaretShopping className=" text-xl text-white drop-shadow-sm cursor-pointer" />
                    </button>
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">
                {Menu.map((data) => (
                    <li key={data.id}>
                        <a 
                            href={data.link} 
                            className="inline-block px-4 hover:text-primary duration-200"
                        >
                            {data.name}
                        </a>
                    </li>
                ))}
                <li className="group relative cursor-pointer">
                    <a href="#" className="flex items-center gap-[2px] py-2">
                        Tranding Cloths 
                        <span>
                            <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                        </span>
                    </a>
                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                        <ul>
                            {DropdownLinks.map((data) => (
                                <li key={data.id}>
                                    <a 
                                        href={data.link} 
                                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                        >
                                            {data.name}
                                        </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar