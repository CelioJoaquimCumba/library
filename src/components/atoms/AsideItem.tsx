export default function AsideItem(props: { label: string, onClick?: () => void, icon?: JSX.Element, selected?: boolean}) {
    const {label, onClick, icon, selected } = props
    return (
        <button onClick={onClick}
        className={`rounded-s-2xl rounded-e-none flex gap-4 bg-blue-100 ${selected ? 'bg-opacity-100 text-slate-900' : 'bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20'} w-full`}>
            <span className={`${selected ? 'text-slate-900' : 'text-yellow-500'}`}>
              {icon}
            </span>
            <span>
              {label}
            </span>
        </button>
    )
}