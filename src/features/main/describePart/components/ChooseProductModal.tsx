import closeIcon from '@assets/svgs/close.svg'
import searchIcon from '@assets/svgs/search.svg'
import SubTab from "@/components/SubTab.tsx";
import {useState} from "react";
import {useCrypto} from "@/apis/crypto.ts";
import type {CryptoItem} from "@/models/cryptoItem.ts";
import CryptoCard from "@/features/main/describePart/components/CryptoCard.tsx";

type Prop = {
    open: boolean,
    onSelectedCrypto: (code: string) => void
    onClose: () => void
}
export default function ChooseProductModal({open, onClose, onSelectedCrypto}: Prop) {
    const [activeTab, setActiveTab] = useState<string | number>(0)
    const {data, isLoading} = useCrypto();

    return (
        <>
            <div className={`fixed top-0 z-100 bottom-0 right-0 left-0 bg-[#00000080] transition-all flex items-center justify-center duration-300 ease-out
             ${open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"}`}>

                <div className='w-[50%] bg-white rounded-lg p-5'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='font-bold'>انتخاب محصول</div>
                        <img src={closeIcon} alt="" onClick={onClose} className='cursor-pointer'/>
                    </div>
                    <div className='flex gap-2 items-center mt-5 border-gray-100 border-1 h-10 rounded'>
                        <img src={searchIcon} alt="" className='w-5 mr-2'/>
                        <input type='text' className='w-full h-full text-xs' id='search' placeholder='جستجو کنید'/>
                    </div>
                    <div className='flex items-center mt-5'>
                        <SubTab title='همه' count={25} value={0} activeKey={activeTab}
                                onSelect={(val: string | number) => setActiveTab(val)}/>
                        <SubTab title='رمز ارز' count={10} value={1} activeKey={activeTab}
                                onSelect={(val: string | number) => setActiveTab(val)}/>
                    </div>
                    {
                        isLoading ? (
                                <div className='mt-10'>
                                    در حال دریافت اطلاعات
                                </div>
                            ) :
                            (
                                <div className='grid grid-cols-3 gap-x-10 gap-y-5 overflow-y-auto max-h-[15rem] mt-5'>
                                    {
                                        data?.map((item: CryptoItem) => {
                                            return (
                                                <CryptoCard item={item} onSelect={(code) => onSelectedCrypto(code)}/>
                                            )
                                        })
                                    }
                                </div>
                            )
                    }
                </div>

            </div>
        </>
    )
}