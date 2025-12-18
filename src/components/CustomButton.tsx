type Props = {
    children: React.ReactNode
    type?: string
    className?: string,
    onClick?: () => void
}

export default function CustomButton({children, type, className, onClick}: Props) {
    return (
        <>
            <button
                onClick={() => onClick?.()}
                className={`rounded border-[1px] px-2 py-1 border-gray-300 cursor-pointer hover:shadow-lg ${type === 'primary' ? 'bg-primary text-white' : ''} ${className}`}>
                {children}
            </button>
        </>
    )
}