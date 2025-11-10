// import { useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "@/assets/Logo.png"
import Link from "./Link"


type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}


const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  return <nav>
    <div
      className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          
          {/* left side */}
          <img alt="logo" src={logo} />

            {/* right side */}
          <div className={`${flexBetween} w-full`}>

            <div  className={`${flexBetween} gap-8 text-sm`}>
              <Link 
              page="Home"
              selectedPAge={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link page="Benefits" 
              selectedPAge={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link page="Our Classes"
              selectedPAge={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link page="Contact Us"
              selectedPAge={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>


          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar