import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () =>{

    const [isMenuOpen,setIsMenuOpen] = useState(false)

    return (
        <div className="bg-slate-200 flex justify-between px-7 py-6">
            <h1>RICK & MORTY</h1>
            <ul className="md:flex justify-between hidden ">
                <li className="mx-4">
                    <Link to='/' className=' text-gray-400  hover:text-gray-800'>Character</Link>
                </li>
                <li className="mx-4">
                    <Link to='/location' className=' text-gray-400  hover:text-gray-800'>Location</Link>
                </li>
                <li className="mx-4">
                    <Link to='/episode' className=' text-gray-400  hover:text-gray-800'>Episode</Link>
                </li>
            </ul>
            <button className="md:hidden nd:mx-3">
                <GiHamburgerMenu onClick={()=>setIsMenuOpen(prev => !prev)} />
            </button>
            {isMenuOpen && (<ul className="flex justify-center flex-col text-center bg-slate-600 md:hidden absolute top-20 right-3 w-[200px] z-10 shadow-md rounded-md h-40 gap-y-4">
                <li className="mx-4">
                    <Link to='/' className=' text-gray-200  hover:text-gray-400'>Character</Link>
                </li>
                <li className="mx-4">
                    <Link to='/location' className=' text-gray-200  hover:text-gray-400'>Location</Link>
                </li>
                <li className="mx-4">
                    <Link to='/episode' className=' text-gray-200  hover:text-gray-400'>Episode</Link>
                </li>
            </ul>)}
        </div>
    )
}

export default Navbar