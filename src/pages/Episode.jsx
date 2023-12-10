import { useEffect, useState } from "react";
import { EPISODE_API_URL } from "../utils/constant";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { filterList } from "../utils/filter";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/Dropdown";


const Episode = () => {

    const [episodeInfo,setEpisodeInfo] = useState({})
    const [episodeNumber,setEpisodeNumber] = useState(1)
    const [characters,setCharacters] = useState([])
    const [filteredList,setFilteredList] = useState([])
    const [searchValue,setSearchValue] = useState('')

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    const onClickFilter = () => {
        const list = filterList(characters,searchValue)
        setFilteredList(list)
    }


    useEffect(()=>{
        async function fetchData() {
            const datas = await fetch(EPISODE_API_URL + episodeNumber)
            const data = await datas.json()
            setEpisodeInfo(data)

            let list = await Promise.all(
                data?.characters?.map(x => fetch(x).then(res => res.json()))
            )
            setCharacters(list)
            setFilteredList(list)
        }
        fetchData()
    },[episodeNumber])

    console.log(episodeInfo);


    console.log(filteredList);


    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-y-3 my-3">
                    <h2 className="font-bold text-2xl md:text-4xl">Episode Name : <span className="text-blue-600">{episodeInfo?.name}</span></h2>
                    <p className="text-xl md:text-2xl">Air Date: {episodeInfo?.air_date}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] lg:w-[70%] mx-auto">
                <DropDown info={51} name={'episode'} updateNumber={setEpisodeNumber} />
                <ListOfEpisode characters={filteredList} />
            </div>
        </div>
    )
}


const ListOfEpisode = ({characters}) => {

    console.log(characters);

    if (!characters) return (
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 ">
            {[...Array(10).keys()].map(card => (
                <ShimmerCard />
            ))}
            <h3>Helo</h3>
        </div>
    )

    return (
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:ml-3">
            {characters?.map(character => (
                <Card 
                    id={character?.id}
                    image={character?.image}
                    location={character?.location}
                    name={character?.name}
                    status={character?.status}
                    key={character?.id}
                />
            ))}
        </div>
    )
}

export default Episode