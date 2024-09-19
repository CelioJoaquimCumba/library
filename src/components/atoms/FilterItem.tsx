export default function FilterItem(props: {label: string, onClick?: () => void}) {
    return <button onClick={props.onClick} className="bg-transparent border border-slate-700 hover:bg-slate-700 p-2">{props.label}</button>;
}