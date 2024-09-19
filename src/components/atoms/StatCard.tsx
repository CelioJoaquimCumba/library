export default function StatCard(props: {label: string, value: string, icon?: JSX.Element, isYellow?: boolean}) {
    const {label, value, icon, isYellow} = props
    return(
        <div className={`flex flex-col p-4 gap-8 rounded-2xl ${isYellow ? 'bg-yellow-500' : 'bg-white'} shadow-md`}>
            <p>{label}</p>
            <div className="flex gap-2">
                {icon}
                {value}
            </div>
        </div>
    )
}