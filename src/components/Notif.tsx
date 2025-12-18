import close from '@assets/svgs/close.svg'

const text = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'
export default function Notif(){
    return (
        <>
            <div className='bg-[#FFB02B] p-4 fixed bottom-5 start-5 text-xs max-w-[22rem] pt-8'>
                <img src={close} alt="" className='absolute top-2 end-2 w-4 aspect-square'/>
                {text}
            </div>
        </>
    )
}