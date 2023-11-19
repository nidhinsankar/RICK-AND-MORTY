

const Card = ({name,image,status,location,id}) =>{

    return (
        <div className="relative my-2 shadow-xl w-[100%]" key={id}>
                <img src={image} alt={name} className="w-full" />
                <span className={`${status === 'Alive' ? 'bg-green-400':'bg-red-400'} absolute top-1 right-2  px-2 py-1 rounded`}>{status}</span>
                <div className="p-3">
                    <p className="mb-3 font-bold text-xl">{name}</p>
                    <p className="text-lg">Last Location</p>
                    <p className="text-2xl">{location.name}</p>
                </div>
        </div>
    )
}

export default Card