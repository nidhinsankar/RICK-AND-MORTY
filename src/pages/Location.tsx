import React, { useEffect, useState } from "react";
import { LOCATION_API_URL } from "../utils/constant";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { filterList } from "../utils/filter";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/Dropdown";
import ShimmerCard from "../components/ShimmerCard";
import { useSelector } from "react-redux";
import { rootState, useAppDispatch } from "../store/store";
import { fetchLocation } from "../store/locationApiSlice";
import { LocationListProps } from "../types/type";

const Location = () => {
  const [locationNumber, setLocationNumber] = useState(1);
  const state = useSelector((state: rootState) => state.location?.location);
  const loading = useSelector((state: rootState) => state.location?.loading);
  const error = useSelector((state: rootState) => state.location?.error);
  const dispatch = useAppDispatch();

  console.log("state", state);

  useEffect(() => {
    dispatch(fetchLocation({ locationNumber }));
  }, [locationNumber]);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-3 my-3">
        <h2 className="font-bold text-xl md:text-4xl">
          Location Name :{" "}
          <span className="text-blue-600">{state?.info?.name}</span>
        </h2>
        <p className="text-xl md:text-2xl">
          Dimension: {state?.info?.dimension}
        </p>
        <p className="text-xl md:text-2xl">Type: {state?.info?.type}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] lg:w-[70%] mx-auto">
        <DropDown
          info={126}
          name={"location"}
          updateNumber={setLocationNumber}
        />
        <ListOfLocation residents={state?.AllCharacter} loading={loading} />
      </div>
    </>
  );
};

const ListOfLocation: React.FC<LocationListProps> = ({
  residents,
  loading,
}) => {
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
      {residents?.map((resident) => (
        <Card
          id={resident?.id}
          image={resident?.image}
          location={resident?.location}
          name={resident?.name}
          status={resident?.status}
          key={resident?.id}
        />
      ))}
    </div>
  );
};

export default Location;
