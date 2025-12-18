
type Prop = {
    title: string
    value: string
}

export function SubItemMenu({title, value}: Prop) {
    return (
        <>
            <div className='flex justify-between gap-2'>
                <p className='text-sm font-semibold text-gray-500'>{title}</p>
                <p className='text-sm font-bold'>{value}</p>
            </div>
        </>
    )
}