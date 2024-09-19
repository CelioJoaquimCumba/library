import { Input } from "../atoms/input";
import FilterItem from "../atoms/FilterItem";
import { SlidersHorizontal } from 'lucide-react'
import {useState} from 'react'

export default function SearchBar() {
    const filters = [{label: "Filtro 1", onclick: () => {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}, {label: "Filtro 2", onclick: ()=> {}}];
    const [search, setSearch] = useState('')
    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    return (
        <section className="flex self-stretch flex-col gap-2 justify-center items-center bg-yellow-500 p-4">
            <Input value={search} onChange={handleSearch} type="text" placeholder="Search..." className="max-w-6xl" />
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