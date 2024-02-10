export const filterList = (list, value) => {
  return list.filter((character) =>
    character?.name.toLowerCase().includes(value.toLowerCase())
  );
};

// const onChange = (e) => {
//   setSearchValue(e.target.value);
// };

// const onClickFilter = () => {
//   const list = filterList(characters, searchValue);
//   setFilteredList(list);
// };

// const onChange = (e) => {
//   setSearchValue(e.target.value);
// };

// const onClickFilter = () => {
//   const list = filterList(residents, searchValue);
//   setFilteredList(list);
// };
