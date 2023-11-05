

const SearchBar = () => {

    return (
        <div className="my-6 w-screen flex justify-center items-center">
            <input className="w-[35%] border-2 border-gray-300 px-5 h-11 rounded-md " placeholder="search....." />
            <button className="m-2 px-5 h-10 rounded-md bg-blue-500">Search</button>
        </div>
    )
}

export default SearchBar