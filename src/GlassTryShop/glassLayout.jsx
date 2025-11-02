export default function Glass(props) {
    const { glassProp, findIndexGlassToTry } = props;
    const { url, name, id } = glassProp;

    return (
        <div className=" shadow-md p-0 m-2">

            <div className="">
                <button onClick={() => findIndexGlassToTry(id)} className="text-white 
                bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
                focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium 
                rounded-lg text-sm px-5 py-1 text-center me-2 m-2">Try</button>
                <img src={url} alt="" />
                <p className="text-sm">{name}</p>
            </div>

        </div>
    )
}
