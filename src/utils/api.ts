// async function fetchData() {
//     const datas = await fetch(CHARACTER_API_URL + `?page=${pageNumber}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`)
//     const data = await datas.json()
//     setCharacterData(data)
//     setFilteredList(data?.results)
// }

//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetch(LOCATION_API_URL + locationNumber).then((res) =>
//         res.json()
//       );
//       // console.log(data);
//       setLocationInfo(data);

//       let list = await Promise.all(
//         data?.residents?.map((x) => fetch(x).then((res) => res.json()))
//       );

//       setResidents(list);
//       setFilteredList(list);
//       // console.log('list',list);
//     }
//     fetchData();
//   }, [locationNumber]);

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

// const fetchApi = async() => {
//     const api = await fetch('https://rickandmortyapi.com/api/character/'+id)
//     const data = await api.json()
//     setCharacterInfo(data)

// }
// console.log(characterInfo);

// useEffect(()=>{
//     fetchApi()
// },[])
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
