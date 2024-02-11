import { useEffect, useState } from "react";
import { LOCATION_API_URL } from "../utils/constant";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { filterList } from "../utils/filter";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/Dropdown";
import ShimmerCard from "../components/ShimmerCard";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { fetchLocation } from "../store/locationApiSlice";

const Location = () => {
  const [locationNumber, setLocationNumber] = useState(1);
  const state = useSelector((state) => state.location?.location);
  const loading = useSelector((state) => state.location?.loading);
  const error = useSelector((state) => state.location?.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLocation({ locationNumber }));
  }, []);

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

const ListOfLocation = ({ residents, loading }) => {
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

// useEffect(() => {
//   async function fetchData() {
//     const data = await fetch(LOCATION_API_URL + locationNumber).then((res) =>
//       res.json()
//     );
//     // console.log(data);
//     setLocationInfo(data);

//     let list = await Promise.all(
//       data?.residents?.map((x) => fetch(x).then((res) => res.json()))
//     );

//     setResidents(list);
//     setFilteredList(list);
//     // console.log('list',list);
//   }
//   fetchData();
// }, [locationNumber]);
