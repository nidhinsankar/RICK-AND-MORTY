import { useEffect } from "react";
import { EPISODE_API_URL } from "../utils/constant";


const Episode = () => {


    useEffect(()=>{
        async function fetchData() {
            const datas = await fetch(EPISODE_API_URL)
            const data = await datas.json()
            console.log(data);
        }
        fetchData()
    },[])

    return (
        <div>episode</div>
    )
}

export default Episode