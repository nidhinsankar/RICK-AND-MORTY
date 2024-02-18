

const ShimmerCard = () => {

    return (
        <div className="outer w-[100%] h-[350px] bg-white rounded-lg animate-pulse shadow-lg">
            <div className="image h-[200px] bg-gray-300 rounded-t-lg"></div>
            <div className="title h-[25px] my-3 bg-gray-500 rounded-full mx-2 w-52"></div>
            <div className="last-location-title my-3 h-[20px] rounded-full mx-2 w-44 bg-gray-500"></div>
            <div className="last-location-name my-1 h-[20px] rounded-full mx-2 w-36 bg-gray-500"></div>
        </div>
    )
}

export default ShimmerCard