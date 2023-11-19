import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"

const Pagination = ({info,pageNumber,setPageNumber}) => {

    const [width,setWidth] = useState(window.innerWidth)

    const updateWidth = () =>{
        setWidth(window.innerWidth)
    }   

    useEffect(()=>{
        window.addEventListener('resize',updateWidth)
        return()=>{
            window.removeEventListener('resize',updateWidth)
        }
    },[])

    const handlePageClick = (data) => {
        setPageNumber(data.selected + 1)
    }
    return (
        <ReactPaginate
            className="flex justify-center items-center my-4 flex-wrap"
            breakLabel='....'
            nextLabel="next "
            previousLabel="prev"
            previousClassName="bg-blue-600 px-4 py-2 text-white"
            nextClassName="bg-blue-600 px-4 py-2 text-white"
            activeClassName="bg-blue-600 text-white"
            pageClassName="mx-6 px-4 py-2 shadow-md hover:bg-blue-300"
            pageLinkClassName="cursor-pointer"
            pageCount={info?.count}
            onPageChange={handlePageClick}
            forcePage={pageNumber === 1 ? 0 : 1}
        />
    )
}

export default Pagination