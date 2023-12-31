import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () =>{

    const [isMenuOpen,setIsMenuOpen] = useState(false)

    return (
        <div className="bg-slate-200 flex justify-between items-center px-7 py-6">
            <Link to={'/'} className="font-bold text-xl text-blue-500">RICK & MORTY</Link>
            <ul className="md:flex justify-between hidden items-center">
                <li className="mx-4">
                    <NavLink to='/'   className={({isActive})=>`text-gray-400  hover:text-gray-800 ${isActive && `border-4 border-b-emerald-400 text-gray-600`}`}>Character</NavLink>
                </li>
                <li className="mx-4">
                    <NavLink to='/location' className={({isActive})=>`text-gray-400  hover:text-gray-800 ${isActive && `border-4 border-b-emerald-400 text-gray-600`}`}>Location</NavLink>
                </li>
                <li className="mx-4">
                    <NavLink to='/episode' className={({isActive})=>`text-gray-400  hover:text-gray-800 ${isActive && `border-4 border-b-emerald-400 text-gray-600`}`}>Episode</NavLink>
                </li>
            </ul>
            <button className="md:hidden nd:mx-3">
                <GiHamburgerMenu onClick={()=>setIsMenuOpen(prev => !prev)} />
            </button>
            {isMenuOpen && (<ul className="flex justify-center flex-col text-center w-[250px] bg-slate-200  md:hidden absolute top-20 right-5 z-10 shadow-md rounded-md">
                <li className="py-4 px-6">
                    <Link to='/' className=' text-gray-600  hover:text-gray-800'>Character</Link>
                </li>
                <li className="py-4 px-6">
                    <Link to='/location' className=' text-gray-600  hover:text-gray-800'>Location</Link>
                </li>
                <li className="py-4 px-6">
                    <Link to='/episode' className=' text-gray-600  hover:text-gray-800'>Episode</Link>
                </li>
            </ul>)}
        </div>
    )
}

export default Navbar