import close from '@assets/svgs/support.svg'

export default function SupportFloatButton(){
    return (
        <>
            <div className='bg-primary flex items-center justify-center fixed bottom-5 left-5 w-10 h-10 rounded-full'>
                <img src={close} alt="" className=' w-8 aspect-square'/>
            </div>
        </>
    )
}