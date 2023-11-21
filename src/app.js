import { useEffect } from 'react'
import reactDOM from 'react-dom/client'
import { RICK_MORTY_API_URL } from './utils/constant'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Episode from './pages/Episode'
import Location from './pages/Location'
import Navbar from './components/Navbar'
import Detail from './pages/Detailpage'


/**
 * NAVBAR
 * BODY 
 *   - SEARCHBAR
 *   - FILTERSTAB
 *   - CARD DISPLAY
 */

const App = () =>{

   

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}


const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/episode',
                element:<Episode />
            },
            {
                path:'/location',
                element:<Location />
            },
            {
                path:'/:id',
                element:<Detail />
            }
        ]
    }
])

const root = reactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)