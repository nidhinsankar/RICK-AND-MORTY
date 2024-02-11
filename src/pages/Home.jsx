import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { CHARACTER_API_URL } from "../utils/constant";
import Card from "../components/Card";
import { filterList } from "../utils/filter";
import Pagination from "../components/Pagination";
import ShimmerCard from "../components/ShimmerCard";
import { useAppDispatch } from "../store/store";
import { fetchCharacter } from "../store/characterAPISlice";
import { useSelector } from "react-redux";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const dispatch = useAppDispatch();
  const characterState = useSelector((state) => state.character?.characters);
  const loading = useSelector((state) => state.character?.loading);
  const fetchError = useSelector((state) => state.character?.error);

  const onChange = (e) => {
    setSearchValue(e.target.value);
    // debounce(()=>fetchData())
  };

  useEffect(() => {
    dispatch(
      fetchCharacter({ pageNumber, searchValue, status, gender, species })
    );
  }, [pageNumber, searchValue, status, gender, species]);

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  return (
    <div>
      <SearchBar searchValue={searchValue} onChange={onChange} />
      <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto lg:w-[70%] ">
        <Filter
          setGender={setGender}
          setPageNumber={setPageNumber}
          setSpecies={setSpecies}
          setStatus={setStatus}
          gender={gender}
          species={species}
          status={status}
        />
        <Character characters={characterState?.results} loading={loading} />
      </div>
      <Pagination
        info={characterState?.info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

const Character = ({ characters, loading }) => {
  console.log("charac =>", characters);

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
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 ">
      {characters?.map((character) => (
        <Card
          image={character?.image}
          id={character?.id}
          name={character?.name}
          status={character?.status}
          location={character?.location}
          key={character?.id}
        />
      ))}
    </div>
  );
};

export default Home;

// useEffect(()=>{
//     fetchData()
// },[pageNumber,status,species,gender])

// useEffect(()=>{
//     let timer = setTimeout(() => {
//         console.log('fired after 300');
//         fetchData()
//     }, 300);
//     return () => clearTimeout(timer)
// },[searchValue,pageNumber,status,species,gender])
