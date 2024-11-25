import Navbar from "../Components/Navbar"
import TaxToolsection from "./TaxToolsection"
const NtNStatus = () => {

  return (
    <div>
      
        <Navbar/>

        <div className="mt-40 w-full "> 
      <h1 className="text-center mb-4 text-4xl font-semibold" > NTN  STATUS FINDER</h1>  
        <form className="flex items-center  max-w-sm mx-auto"> 
        
    <label htmlFor="simple-search" className="sr-only">
        Search
    </label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
                className="w-4 h-4 text-[#47464C]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
            </svg>
        </div>
        <input
            type="number"
            id="simple-search"
            className="bg-[#FFFFF] border border-[#47464C] text-[#47464C] text-sm rounded-lg focus:ring-[#B4C424] focus:border-[#B4C424] block w-full ps-10 p-2.5"
            placeholder="000-00-000"
            required
        />
    </div>
    <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-[#B4C424] rounded-lg border border-[#B4C424] hover:bg-[#B4C424]/90 focus:ring-4 focus:outline-none focus:ring-[#B4C424]/50"
    >
        <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
        </svg>
  
    </button>
</form>

      </div>


         <TaxToolsection/>          
 
    </div>
  )
}

export default NtNStatus
