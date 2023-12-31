

const Button = ({name,task,setPageNumber,current}) => {
    console.log(current);
    return (
        <button
            onClick={()=>{
                task(name);
                setPageNumber(1)
            }}
             className={`px-5 py-2 m-3 border border-blue-800 bg-white ${current === name && `bg-blue-600 text-white` } `}
        >
            {name}
        </button>
    )
}

export default Button