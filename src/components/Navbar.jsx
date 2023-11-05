import { Link } from "react-router-dom"


const Navbar = () =>{

    return (
        <div className="w-screen bg-slate-200 flex justify-between px-7 py-6">
            <h1>RICK & MORTY</h1>
            <ul className="flex justify-between">
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
        </div>
    )
}

export default Navbar