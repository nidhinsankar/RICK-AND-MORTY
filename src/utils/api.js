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
