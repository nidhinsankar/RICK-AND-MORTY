import { useEffect, useState } from "react"
import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"
import { CHARACTER_API_URL } from "../utils/constant"
import Card from "../components/Card"
import { filterList } from "../utils/filter"
import Pagination from "../components/Pagination"
import ShimmerCard from "../components/ShimmerCard"

const Home = () => {

    const [CharacterData,setCharacterData] = useState({}) 
    const [pageNumber,setPageNumber] = useState(1)
    const [filteredList,setFilteredList] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [status,setStatus] = useState('')
    const [gender,setGender] = useState('')
    const [species,setSpecies] = useState('')
   
    const onChange = (e) => {
        setSearchValue(e.target.value)
        // debounce(()=>fetchData())
    }

    async function fetchData() {
        const datas = await fetch(CHARACTER_API_URL + `?page=${pageNumber}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`)
        const data = await datas.json()
        setCharacterData(data)
        setFilteredList(data?.results)
    }
    // useEffect(()=>{
    //     fetchData()
    // },[pageNumber,status,species,gender])

    useEffect(()=>{
        let timer = setTimeout(() => {
            console.log('fired after 300');
            fetchData()
        }, 300);
        return () => clearTimeout(timer)
    },[searchValue,pageNumber,status,species,gender])


    return (
        <div>
            <SearchBar
                searchValue={searchValue}
                onChange={onChange}
            />   
            <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto lg:w-[70%] ">
                <Filter
                    setGender={setGender}
                    setPageNumber={setPageNumber}
                    setSpecies={setSpecies}
                    setStatus={setStatus}
                    gender={gender}
                    species={species}
                    status={status}
                />
                <Character characters={filteredList} />   
            </div>
            <Pagination info={CharacterData?.info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    )
}


const Character = ({characters}) => {

    console.log('charac =>',characters);

    if (!characters) return (
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 ">
            {[...Array(10).keys()].map(card => (
                <ShimmerCard />
            ))}
            <h3>Helo</h3>
        </div>
    )

    return (
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 ">
            {characters?.map(character => (
                <Card image={character?.image} id={character?.id} name={character?.name} status={character?.status} location={character?.location} key={character?.id} />
            ))}
        </div>
    )
}

export default Home