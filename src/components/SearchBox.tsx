import SearchIcon from "../assets/magnifying-glass-solid.svg"

const SearchBox = () => {
  return (
    <div className="my-8 flex ">
        <input type="text" placeholder="Search" className="px-4 py-2 rounded-l-full w-1/2 focus:outline-none"/>
        <img src={SearchIcon} alt="" className="size-10 hover:bg-slate-200 p-3 rounded-r-full bg-white"/>
    </div>
  )
}

export default SearchBox