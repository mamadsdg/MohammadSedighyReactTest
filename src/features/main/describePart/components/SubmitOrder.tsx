import addArchive from '@assets/svgs/add-archive.svg'
import arrowDown from '@assets/svgs/arrow-down.svg'
import {Divider} from "@/components/Divider.tsx";
import CustomButton from "@/components/CustomButton.tsx";
import {type ChangeEvent, useState} from "react";
import ChooseProductModal from "./ChooseProductModal.tsx";
import ExchangeIcon from '@assets/svgs/exchange.svg'
import FirstCryptoIcon from '@assets/svgs/crypto-1.svg'
import SecondCryptoIcon from '@assets/svgs/crypto-2.svg'
import SubmitOrderModal from "@/features/main/describePart/components/SubmitOrderModal.tsx";
import type {OrderForm} from "@/models/order.ts";

export default function SubmitOrder() {

    const [visibleChangeModal, setVisibleChangeModal] = useState<boolean>(false)
    const [visibleOrderModal, setVisibleOrderModal] = useState<boolean>(false)
    const [formData, setFormData] = useState<OrderForm>({
        firstOption: "",
        secondOption: "",
        thirdOption: "",
        selectedCrypto: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    };

    function handleSelectedCrypto(code: string) {
        console.log(code)
        setFormData((prv) => Object.assign({
            ...prv,
            selectedCrypto: code
        }))
        setVisibleChangeModal(false)
    }

    function handleOpenOrderModal() {
        if (formData.firstOption && formData.secondOption && formData.thirdOption) {
            setVisibleOrderModal(true)
        } else{
            alert('لطفا تمامی اطلاعات را وارد کنید.')
        }
    }

    function resetData(){
        setFormData(Object.assign({
            firstOption: '',
            secondOption: '',
            thirdOption: '',
            selectedCrypto: ''
        }))
        setVisibleOrderModal(false)
    }

    return (
        <>
            <div>
                <div className='flex flex-row-reverse'>
                    <img src={addArchive} alt=""/>
                </div>
                <div>
                    <div>مسیر تبدیل خود را مشخص کنید</div>
                    <div className='border-gray-100 border-1 mt-5 rounded w-full p-5 cursor-pointer'
                         onClick={() => setVisibleChangeModal(true)}>
                        <div className='flex items-center justify-between h-15'>
                            <div className='text-gray-400'>دارایی مبدا</div>
                            <div className='flex items-center gap-2 w-fit'>
                                <div className='flex gap-1 items-center'>
                                    <span><img src={FirstCryptoIcon} alt=""/></span>
                                    <span>تتر</span>
                                </div>
                                <img src={arrowDown} alt="" className='w-5'/>
                            </div>
                        </div>
                        <div className='relative'>
                            <Divider/>
                            <div
                                className='w-10 aspect-square rounded-full flex items-center justify-center border-[1px] border-gray-200 bg-white z-10 justify-self-center -mt-8'>
                                <img src={ExchangeIcon} alt=""/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-15'>
                            <div className='text-gray-400'>دارایی مقصد</div>
                            <div className='flex items-center gap-2 w-fit'>
                                <div className='flex gap-1 items-center'>
                                    <span><img src={SecondCryptoIcon} alt=""/></span>
                                    <span>ترون</span>
                                </div>
                                <img src={arrowDown} alt="" className='w-5'/>
                            </div>
                        </div>
                    </div>
                    {
                        formData.selectedCrypto ? (
                            <div className='mt-5 grid grid-cols-1 gap-3'>
                                <div>
                                    <p className='text-sm'>دیتای مربوط به ورودی</p>
                                    <input name='firstOption' type='text' placeholder='لورم ایپسوم متن ساختگی'
                                           value={formData.firstOption}
                                           onChange={handleChange}
                                           className='w-full h-10 mt-2 !border-gray-200 px-2 text-xs border-1'/>
                                </div>
                                <div>
                                    <p className='text-sm'>دیتای مربوط به ورودی</p>
                                    <input name='secondOption' type='text' placeholder='لورم ایپسوم متن ساختگی'
                                           value={formData.secondOption}
                                           onChange={handleChange}
                                           className='w-full h-10 mt-2 !border-gray-200 px-2 text-xs border-1'/>
                                </div>
                                <div>
                                    <p className='text-sm'>دیتای مربوط به خروجی</p>
                                    <input name='thirdOption' type='text' placeholder='لورم ایپسوم متن ساختگی'
                                           value={formData.thirdOption}
                                           onChange={handleChange}
                                           className='w-full h-10 mt-2 !border-gray-200 px-2 text-xs border-1'/>
                                </div>
                            </div>
                        ) : ''
                    }
                    <div className='flex flex-row-reverse'>
                        <CustomButton className=' mt-5 px-4 py-3' type='primary'
                                      onClick={() => handleOpenOrderModal()}>
                            ثبت سفارش و ادامه
                        </CustomButton>
                    </div>
                </div>
                <ChooseProductModal open={visibleChangeModal} onClose={() => setVisibleChangeModal(false)}
                                    onSelectedCrypto={(code: string) => handleSelectedCrypto(code)}/>
                <SubmitOrderModal open={visibleOrderModal} onClose={() => resetData()} item={formData}/>
            </div>
        </>
    )
}