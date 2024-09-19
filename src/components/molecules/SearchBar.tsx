import { Input } from "../atoms/input";
import FilterItem from "../atoms/FilterItem";
import { SlidersHorizontal } from 'lucide-react'

export default function SearchBar() {
    const filters = [{label: "Filtro 1", onclick: () => {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}];
    return (
        <section className="flex flex-col gap-2 justify-center items-center bg-yellow-500 p-4">
            <Input type="text" placeholder="Search..." className="max-w-6xl" />
            <div className="flex w-full justify-between gap-4 items-center max-w-6xl">
                <div className="flex gap-2">
                    <SlidersHorizontal className="size-full" />
                    <span>Filtros:</span>
                </div>
                <div className="flex justify-between flex-grow">
                    {
                        filters.map(filter => <FilterItem key={filter.label} {...filter}/>)
                    }
                </div>
            </div>
        </section>
    );
}