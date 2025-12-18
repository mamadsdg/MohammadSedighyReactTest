
type Prop = {
    title: string
    value: string
}

export function SubItemMenu({title, value}: Prop) {
    return (
        <>
            <div className='flex justify-between gap-2'>
                <p className='text-xs font-bold text-gray-600'>{title}</p>
                <p className='text-xs font-semibold text-gray-500'>{value}</p>
            </div>
        </>
    )
}