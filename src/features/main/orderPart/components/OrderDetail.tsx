import {Step} from "./Step.tsx";

export default function OrderDetail() {
    return (
        <>
            <div>
                <h2 className='font-bold'>مشخصات سفارش</h2>
                <div className='grid grid-cols-3 mt-8'>
                    <Step title='تسویه ریالی' stepNum='مرحله اول' active/>
                    <Step title='تسویه ریالی' stepNum='مرحله دوم' />
                    <Step title='تسویه ریالی' stepNum='مرحله سوم' />
                </div>
            </div>
        </>
    )
}