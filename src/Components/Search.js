

const Search = ({searchHandler}) => {
    return (
        <div className="w-full my-4 text-center">
            <input type={"search"} placeholder={"Type in Name or ID"} onChange={searchHandler} className={"w-11/12 lg:w-3/12 outline-none focus:outline-1 focus:outline-slate-400 rounded-lg shadow-md shadow-slate-300 p-2"} />

        </div>
    )

}

export default Search