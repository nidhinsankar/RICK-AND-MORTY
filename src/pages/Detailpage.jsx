import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { fetchSingleCharacter } from "../store/singleCharacterApiSlice";

const Detail = ({}) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const state = useSelector((state) => state.singleCharacter);

  useEffect(() => {
    dispatch(fetchSingleCharacter({ id }));
  }, []);

  return (
    <main className="h-[calc(100vh-72px)] flex justify-center items-center">
      <div
        key={state?.singleCharacter?.id}
        className="shadow-lg relative w-[300px] mx-auto my-5 rounded-3xl"
      >
        <img
          src={state?.singleCharacter?.image}
          alt={state?.singleCharacter?.name}
          className="rounded-t-3xl"
        />
        <span
          className={`${
            state?.singleCharacter?.status === "Alive"
              ? "bg-green-400"
              : state?.singleCharacter?.status === "Dead"
              ? "bg-red-400"
              : "bg-yellow-400"
          } absolute top-3 right-2  px-2 py-1 rounded`}
        >
          {state?.singleCharacter?.status}
        </span>
        <div className="p-4">
          <h2 className="font-bold text-2xl text-blue-500">
            {state?.singleCharacter?.name}
          </h2>
          <p className="font-semibold text-xl">
            Origin :{" "}
            <span className="text-base font-normal">
              {state?.singleCharacter?.origin?.name}
            </span>
          </p>
          <p className="font-semibold text-xl">
            Last Location :{" "}
            <span className="text-base font-normal">
              {state?.singleCharacter?.location?.name}
            </span>
          </p>
          <p className="font-semibold text-xl">
            Species :{" "}
            <span className="text-base font-normal">
              {state?.singleCharacter?.species}
            </span>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Detail;

// const fetchApi = async() => {
//     const api = await fetch('https://rickandmortyapi.com/api/character/'+id)
//     const data = await api.json()
//     setCharacterInfo(data)

// }
// console.log(characterInfo);

// useEffect(()=>{
//     fetchApi()
// },[])
