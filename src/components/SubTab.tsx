type Prop = {
    count?: number
    title: string
    value: string | number
    activeKey?: string | number
    onSelect: (val: string | number) => void
}

export default function SubTab({count, value, title, activeKey, onSelect}: Prop) {
    // console.log(value)
    return (
        <>
            <div className='cursor-pointer' onClick={() =>onSelect(value)}>
                <div className='flex items-center text-xs gap-1 px-3'>
                    <div className={`text-gray-400 font-bold ${value === activeKey ? 'text-primary' : ''}`}>{title}</div>
                    <div className={`rounded p-1 bg-blue-100 text-gray-500 ${value === activeKey ? 'bg-primary text-white' : ''}`}>{count}</div>
                </div>
                <div className={`w-full bg-gray-100 h-[1px] mt-2 ${value === activeKey ? 'bg-primary' : ''}`}/>
            </div>
        </>
    )
}