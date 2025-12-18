import {SubItemMenu} from "./SubItemMenu.tsx";
import {Divider} from "@/components/Divider.tsx";

export default function Pricing() {
    return (
        <>
            <div>
                <h2 className='font-bold'>جزئیات هزینه پرداختی</h2>
                <div className='flex flex-col gap-2 mt-10'>
                    <SubItemMenu title='مقدار وارد شده' value='10 دلار'/>
                    <SubItemMenu title='مدت زمان خروجی' value='5 ساعت'/>
                    <SubItemMenu title='مدت زمان بررسی دریافت لیر' value='1 الی 3 ساعت'/>
                    <SubItemMenu title='کارمزد تبدیل' value='1,000,000 ریال'/>
                </div>
                <Divider/>
                <div className='flex justify-between gap-2 '>
                    <p className='text-xs text-primary font-bold'>مبلغ نهایی</p>
                    <p className='text-xs font-bold'>30,000,000 ریال</p>
                </div>
            </div>
        </>
    )
}