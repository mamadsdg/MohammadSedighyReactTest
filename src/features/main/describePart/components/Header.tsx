import SearchBar from "./SearchBar.tsx";
import Routing from "./Routing.tsx";

export default function Header() {
    return (
        <>
            <div className='sticky w-full top-0 bg-white pb-2 pt-5 px-5'>
                <SearchBar/>
                <Routing/>
            </div>
        </>
    )
}