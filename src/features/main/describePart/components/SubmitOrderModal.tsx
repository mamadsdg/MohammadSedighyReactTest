import closeIcon from '@assets/svgs/close.svg'
import type {OrderForm} from "@/models/order.ts";
import {SubItemMenu} from "@/features/main/describePart/components/SubItemMenu.tsx";
import {useState} from "react";
import DraggableInput from "@/features/main/describePart/components/DraggableInput.tsx";
import CustomButton from "@/components/CustomButton.tsx";

type Prop = {
    open: boolean
    onClose: () => void
    item: OrderForm
}
export default function SubmitOrderModal({open, onClose, item}: Prop) {

    const [dataInput, setDataInput] = useState('')

    const [uploadedImg, setUploadedImage] = useState<File>()

    function handleSubmitOrder() {
        if (!uploadedImg) {
            alert('لطفا عکس را انتخاب کنید.')
            return
        }
        try {
            alert(`تست محمد تکمیل شد! به به عجب پروژه تستی شد Submitted data:
            ${JSON.stringify({...item, file: uploadedImg ? URL.createObjectURL(uploadedImg) : null}, null, 2)}`);
            console.log('My test completed!"Mohammad Seddighi"')
            onClose()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className={`fixed top-0 z-100 bottom-0 right-0 left-0 bg-[#00000080] transition-all flex items-center justify-center duration-300 ease-out
             ${open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"}`}>

                <div className='w-[40%] bg-white rounded-lg p-5'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='font-bold'>جزئیات هزینه پرداختی</div>
                        <img src={closeIcon} alt="" onClick={onClose} className='cursor-pointer'/>
                    </div>
                    <div className='gap-2 grid mt-5'>
                        <SubItemMenu title='مقدار ورودی 1' value={item.firstOption}/>
                        <SubItemMenu title='مقدار ورودی 2' value={item.secondOption}/>
                        <SubItemMenu title='مقدار خروجی' value={item.thirdOption}/>
                    </div>
                    <div className='text-gray-400 text-sm mt-5 text-justify'>در صورت صحت اطلاعات فوق، پس از واریز وجه به
                        حساب عکس فیش واریزی را در قسمت زیر ارسال و سپس سفارش خود را تکمیل کنید.
                    </div>
                    <input name='firstOption' type='text' placeholder='لورم ایپسوم متن ساختگی'
                           value={dataInput}
                           onChange={(e) => setDataInput(e.target.value)}
                           className='w-full h-10 mt-2 !border-gray-200 px-2 text-xs border-1'/>
                    <DraggableInput onSelectImage={(val: File | undefined) => setUploadedImage(val)}/>
                    <CustomButton className='mt-5 w-full py-3' type='primary' onClick={handleSubmitOrder}>
                        تکمیل سفارش
                    </CustomButton>
                </div>

            </div>
        </>
    )
}