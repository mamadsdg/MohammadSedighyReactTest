
import Description from "./components/Description.tsx";
import Header from "./components/Header.tsx";
import SubmitOrder from "./components/SubmitOrder.tsx";

export function DescribePart() {
    return (
        <>
            <div className=''>
                <Header/>
                <div className='grid grid-cols-2 px-5 mt-5 gap-10'>
                    <Description/>
                    <SubmitOrder/>
                </div>
            </div>
        </>
    )
}