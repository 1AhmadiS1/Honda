import logo from "../../images/honda-logo-DkUJ5YbS.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion"
import { useState } from "react";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },

  {
    id: 2,
    title: "About us",
    link: "#",
  },

  {
    id: 3,
    title: "Bikes",
    link: "#",
  },

  {
    id: 4,
    title: "Cars",
    link: "#",
  },
];

function Navbar() {
const [menu,setMenu]=useState(false)

const togglemenu=()=>{
  setMenu(prev=>!prev)
}
  return (
    <motion.main 
    initial={{opacity:0,y:-100}}
whileInView={{opacity:1,y:0}}
transition={{
  type:"spring",
  stiffness:100,
  damping:10,
  delay:0.8,
  duration:0.8
  
  
  }}
    
    
    className="py-10 text-white px-4 top-0 left-0 w-full z-20 text-white">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div>
            <img src={logo} alt="Logo" className="w-[80px] invert" />
          </div>
          {/* nav menu section */}

          <div className="hidden md:block">
            <ul className="flex gap-4">
              {NavMenu.map((item) => (
                <li key={item.id} className=" ">
                  <a
                    className=" px-6 py-2  uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff] hover:text-white"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* hemburger menu section */}

          <div className="flex items-center gap-6 relative">
            <button onClick={togglemenu} className="rounded-icons md:hidden">
              <GiHamburgerMenu className="text-xl"/>

            </button>
     

            <div className="rounded-icons">
              <FaSearch className="text-xl" />
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div>
          <div className="text-center py-8">
            {NavMenu.map((item, index) => (
              <motion.div
                key={index}
                className="py-2 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1, 
                  duration: 0.3,
                }}
              >
                <a
                  href={item.href}
                  className="text-white md:hidden cursor-pointer hover:text-cyan-400"
                >
                  {item.title}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </motion.main>
  );
}

export default Navbar;
