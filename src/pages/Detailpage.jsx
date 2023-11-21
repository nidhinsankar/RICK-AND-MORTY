import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Detail = ({}) => {

    const { id } = useParams()
    const [characterInfo,setCharacterInfo] = useState()

    const fetchApi = async() => {
        const api = await fetch('https://rickandmortyapi.com/api/character/'+id)
        const data = await api.json()
        setCharacterInfo(data)

    } 
    console.log(characterInfo);

    useEffect(()=>{
        fetchApi()
    },[])

    return (
        <main className="h-[calc(100vh-72px)] flex justify-center items-center">
            
        <div key={characterInfo?.id} className="shadow-lg relative w-[300px] mx-auto my-5 rounded-3xl">
            <img src={characterInfo?.image} alt={characterInfo?.name} className="rounded-t-3xl" />
            <span className={`${characterInfo?.status === 'Alive' ? 'bg-green-400':characterInfo?.status === 'Dead' ? 'bg-red-400' : 'bg-yellow-400'} absolute top-3 right-2  px-2 py-1 rounded`}>{characterInfo?.status}</span>
            <div className="p-4">

            <h2 className="font-bold text-2xl text-blue-500">{characterInfo?.name}</h2>
            <p className="font-semibold text-xl">Origin : <span className="text-base font-normal">{characterInfo?.origin?.name}</span></p>
            <p className="font-semibold text-xl">Last Location : <span className="text-base font-normal">{characterInfo?.location?.name}</span></p>
            <p className="font-semibold text-xl">Species : <span className="text-base font-normal">{characterInfo?.species}</span> </p>
            </div>
        </div>
        </main>
    )
}

export default Detail