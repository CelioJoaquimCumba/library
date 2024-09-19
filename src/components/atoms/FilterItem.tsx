export default function FilterItem(props: {label: string, onClick?: () => void}) {
    return <button onClick={props.onClick} className="bg-transparent w-full md:w-fit border border-slate-700 hover:bg-slate-100 px-2 py-1">{props.label}</button>;
}