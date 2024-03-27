import AOS from "aos";
import { useEffect } from "react";
import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar";

export default function App() {

  const [orderPopup, setOrderPopup] = useState(true);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup)
  }

  useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar handleOrderPopup={handleOrderPopup} />
    </div>
  )
}