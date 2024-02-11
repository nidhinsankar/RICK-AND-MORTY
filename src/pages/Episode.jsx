import { useEffect, useState } from "react";
import { EPISODE_API_URL } from "../utils/constant";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { filterList } from "../utils/filter";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/Dropdown";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { fetchEpisode } from "../store/episodeApiSLice";
import ShimmerCard from "../components/ShimmerCard";

const Episode = () => {
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const state = useSelector((state) => state.episode?.episodes);
  const loading = useSelector((state) => state.episode?.loading);
  const error = useSelector((state) => state.episodes?.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEpisode({ episodeNumber }));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-y-3 my-3">
        <h2 className="font-bold text-2xl md:text-4xl">
          Episode Name :{" "}
          <span className="text-blue-600">{state?.info?.name}</span>
        </h2>
        <p className="text-xl md:text-2xl">Air Date: {state?.info?.air_date}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] lg:w-[70%] mx-auto">
        <DropDown info={51} name={"episode"} updateNumber={setEpisodeNumber} />
        <ListOfEpisode characters={state?.AllCharacter} loading={loading} />
      </div>
    </div>
  );
};

const ListOfEpisode = ({ characters, loading }) => {
  if (loading)
    return (
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 ">
        {[...Array(10).keys()].map((card) => (
          <ShimmerCard />
        ))}
        <h3>Helo</h3>
      </div>
    );

  return (
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:ml-3">
      {characters?.map((character) => (
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
  );
};

export default Episode;

// useEffect(()=>{
//     async function fetchData() {
//         const datas = await fetch(EPISODE_API_URL + episodeNumber)
//         const data = await datas.json()
//         setEpisodeInfo(data)

//         let list = await Promise.all(
//             data?.characters?.map(x => fetch(x).then(res => res.json()))
//         )
//         setCharacters(list)
//         setFilteredList(list)
//     }
//     fetchData()
// },[episodeNumber])

// console.log(episodeInfo);

// console.log(filteredList);
