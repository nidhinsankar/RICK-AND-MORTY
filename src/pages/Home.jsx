import { useEffect } from "react"
import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"
import { CHARACTER_API_URL } from "../utils/constant"


const Home = () => {


    useEffect(()=>{
        async function fetchData() {
            const datas = await fetch(CHARACTER_API_URL)
            const data = await datas.json()
            console.log(data);
        }
        fetchData()
    },[])

    return (
        <div>
            <SearchBar />   
            <div>
                <Filter/>
                <h2>Home</h2>    
            </div>
        </div>
    )
}

export default Home