import React from "react";

interface SearchBarProps {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ searchValue, onChange }) => {
  return (
    <div className="my-6 w-[90%] flex justify-center items-center mx-auto">
      <input
        className="w-[75%] md:w-[35%] border-2 border-gray-300 px-5 h-11 rounded-md "
        value={searchValue}
        onChange={onChange}
        placeholder="search....."
      />
      <button className="m-2 px-5 h-10 rounded-md bg-blue-500 text-white">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
