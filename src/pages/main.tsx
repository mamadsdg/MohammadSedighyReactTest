import Notif from "../components/Notif.tsx";
import {DescribePart} from "@/features/main/describePart";
import {OrderPart} from "@/features/main/orderPart";
import SupportFloatButton from "../components/SupportFloatButton.tsx";

export default function Main() {
    return (
        <>
            <div dir="rtl" className='h-screen relative'>
                <div className="flex h-full relative">
                    <div className='w-[70%]'>
                        <DescribePart/>
                    </div>
                    <div className='h-screen absolute w-[30%] left-0 bottom-0 top-0'>
                        <OrderPart/>
                    </div>
                </div>
                <SupportFloatButton/>
                <Notif/>
            </div>
        </>
    )
}