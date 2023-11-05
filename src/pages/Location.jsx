import { useEffect } from "react";
import { LOCATION_API_URL } from "../utils/constant";



const Location = () => {

    useEffect(()=>{
        async function fetchData() {
            const datas = await fetch(LOCATION_API_URL)
            const data = await datas.json()
            console.log(data);
        }
        fetchData()
    },[])

    return (
        <div>Location</div>
    )
}

export default Location