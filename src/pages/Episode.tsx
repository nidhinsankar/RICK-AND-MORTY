import { useEffect, useState } from "react";
import { EPISODE_API_URL } from "../utils/constant";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { filterList } from "../utils/filter";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/Dropdown";
import { useSelector } from "react-redux";
import { rootState, useAppDispatch } from "../store/store";
import { fetchEpisode } from "../store/episodeApiSLice";
import ShimmerCard from "../components/ShimmerCard";
import { EpisodeListProps } from "../types/type";

const Episode = () => {
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const state = useSelector((state: rootState) => state.episode?.episodes);
  const loading = useSelector((state: rootState) => state.episode?.loading);
  const error = useSelector((state: rootState) => state.episode?.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEpisode({ episodeNumber }));
  }, [episodeNumber]);

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

const ListOfEpisode = ({ characters, loading }: EpisodeListProps) => {
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
