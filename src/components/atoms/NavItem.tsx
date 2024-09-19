export default function NavItem(props: {label: string, path?: string}) {
    return <div className="bg-white bg-opacity-0 hover:bg-opacity-10 p-4 cursor-pointer">{props.label}</div>;
}