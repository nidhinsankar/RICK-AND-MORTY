import { Link } from "react-router-dom";

const Card = ({ name, image, status, location, id }) => {
  return (
    <div
      className="relative my-2 shadow-2xl hover:shadow-lg flex flex-col content-end w-[100%] rounded-lg card"
      key={id}
    >
      <Link to={`/${id}`}>
        <img src={image} alt={name} className="w-full rounded-t-lg" />
        <span
          className={`${
            status === "Alive" ? "bg-green-400" : "bg-red-400"
          } absolute top-1 right-2  px-2 py-1 rounded`}
        >
          {status}
        </span>
        <div className="p-3">
          <p className="mb-3 font-bold text-xl">{name}</p>
          <p className="text-lg mt-auto">Last Location</p>
          <p className="text-2xl">{location.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
