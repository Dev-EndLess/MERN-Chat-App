import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <form action="" className='flex justify-center gap-2 my-4'>
      {/* <div className="flex gap-4">
        <div> */}
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered rounded-lg bg-neutral-900 text-emerald-200"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        {/* </div>
        <div> */}
          <button
            type="submit"
            className="btn btn-circle bg-emerald-200 text-neutral-900 border-neutral-900"
          >
            <IoSearchSharp className="w-6 h-6 outline-none" />
          </button>
        {/* </div>
      </div> */}
    </form>
  );
};

export default SearchInput;
