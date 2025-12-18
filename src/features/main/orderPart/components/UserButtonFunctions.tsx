import CustomButton from "@/components/CustomButton.tsx";
import basket from '@assets/svgs/basket.svg'
import arrow_down from '@assets/svgs/arrow-down.svg'
import userImg from '@assets/imgs/user.png'
export default function UserButtonFunctions() {
    return(
        <>
            <div className='flex flex-row-reverse gap-2 h-10 sticky top-5 bg-secondary'>
                <CustomButton>
                    <img src={basket} alt="" className="w-6"/>
                </CustomButton>
                <CustomButton>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <img src={userImg} alt="" className='rounded-full w-6'/>
                            <p className='font-bold text-xs'>بهبود عنایت</p>
                        </div>
                        <img src={arrow_down} alt="" className='w-5'/>
                    </div>
                </CustomButton>

            </div>
        </>
    )
}