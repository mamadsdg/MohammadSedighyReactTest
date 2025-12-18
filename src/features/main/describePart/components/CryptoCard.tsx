import type {CryptoItem} from "@/models/cryptoItem.ts";

type Prop = {
    item: CryptoItem
    onSelect: (code: string) => void
}

export default function CryptoCard({item,onSelect}: Prop) {
    return (
        <>
            <div className='flex items-center gap-2 cursor-pointer rounded-lg p-1 hover:bg-gray-100' onClick={() => onSelect(item.code)}>
                <img src={item.icon} alt="" className='w-10 aspect-square rounded-full bg-gray-200'/>
                <div>
                    <div>{item.name}</div>
                    <div className='text-sm text-gray-400'>{item.code}</div>
                </div>
            </div>
        </>
    )
}