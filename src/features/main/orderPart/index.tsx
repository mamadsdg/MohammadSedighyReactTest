import UserButtonFunctions from "./components/UserButtonFunctions.tsx";
import OrderDetail from "./components/OrderDetail.tsx";
import Pricing from "./components/Pricing.tsx";


export function OrderPart() {
    return (
        <>
            <div className='bg-secondary w-full h-full p-5 grid grid-cols-1 gap-10'>
                <UserButtonFunctions/>
                <OrderDetail/>
                <Pricing/>
            </div>
        </>
    )
}