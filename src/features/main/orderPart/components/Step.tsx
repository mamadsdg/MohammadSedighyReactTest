import tickSquare from '@assets/svgs/tick-square.svg'

type Prop = {
    title: string
    stepNum: string
    active?: boolean
}

export function Step({title,stepNum,active}: Prop) {
    return (
        <>
            <div className='flex items-center gap-2'>
                <div className='bg-gray-900 w-10 aspect-square rounded-lg flex items-center justify-center'>
                    <img src={tickSquare} alt=""/>
                </div>
                <div>
                    <p className='text-xs'>{title}</p>
                    <p className={active? 'text-primary text-xs':'text-xs'}>{stepNum}</p>
                </div>
            </div>
        </>
    )
}