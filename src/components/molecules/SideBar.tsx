import { Briefcase, BriefcaseBusiness, ChartBarIncreasing, File, Folder, Home, Library, Settings, Users } from "lucide-react";
import AsideItem from "../atoms/AsideItem";

export default function SideBar() {
    return (
        <aside className="flex flex-col bg-slate-900 rounded-r-3xl text-white">
            <section className="flex flex-col items-center justify-center gap-2 p-10 bg-slate-800">
                <div className="size-32 bg-yellow-500 rounded-full">
                </div>
                <h5 className="text-lg font-medium">Administrador</h5>
                <p>Administrador@bdigital.co.mz</p>
            </section>
            <section className="flex flex-col gap-3 py-8 pl-4 overflow-y-auto">
                <ul className="flex flex-col gap-2">
                    <AsideItem label="Home" icon={<Home/>} />
                    <AsideItem label="Bibliotecas" icon={<Library/>} />
                    <AsideItem label="Recursos" icon={<Briefcase/>} />
                    <AsideItem label="Estatisticas" icon={<ChartBarIncreasing/>} selected />
                    <AsideItem label="Relatorios" icon={<File/>} />
                    <AsideItem label="Categorias" icon={<Folder/>} />
                    <AsideItem label="Configuracoes" icon={<Settings/>} />
                    <AsideItem label="Suporte Tecnico" icon={<BriefcaseBusiness/>} />
                    <AsideItem label="Feedback" icon={<Users/>} />
                </ul>
            </section>
        </aside>
    )
}