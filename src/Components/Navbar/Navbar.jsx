import React from 'react'
import { IoMdSearch} from "react-icons/io"
import { FaCaretDown } from "react-icons/fa"
import { FaCartShopping} from "react-icons/fa6"
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
      id: 4,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5,
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

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white'>
        <div className="py-2 bg-primary/40 ">
            <div className="container flex items-center justify-between ">
                <div>
                    <a href="#" className="flex gap-2 text-2xl font-bold text-white sm:text-3xl">
                        <img src={Logo} alt="logo" className="w-10" />
                        Khalid <span className='text-3xl text-blue-700 font-cursive'>Fabrics</span>
                    </a>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="relative hidden group sm:block">
                        <input 
                        type="text" 
                        placeholder='Search'
                        className="w-[200px] sm:w-[300px] group-hover:w-[300px] sm:group-hover:w-[400px] md:w-[400px] md:group-hover:w-[500px] transition-all duration-300 rounded-full border border-green-300 px-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800" />
                        <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
                    </div>
                    <button 
                        onClick={() => handleOrderPopup()}
                        className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
                    >
                        <span className="hidden transition-all duration-200 group-hover:block">
                            Order
                        </span>
                        <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
                    </button>
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className="flex justify-center">
            <ul className="items-center hidden gap-4 sm:flex">
                {Menu.map((data) => (
                    <li key={data.id}>
                        <a 
                            href={data.link} 
                            className="inline-block px-4 duration-200 hover:text-primary"
                        >
                            {data.name}
                        </a>
                    </li>
                ))}
                <li className="relative cursor-pointer group">
                    <a href="#" className="flex items-center gap-[2px] py-2">
                        Tranding Cloths 
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </span>
                    </a>
                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                        <ul>
                            {DropdownLinks.map((data) => (
                                <li key={data.id}>
                                    <a 
                                        href={data.link} 
                                        className="inline-block w-full p-2 rounded-md hover:bg-primary/20"
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