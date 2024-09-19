import NavItem from "../atoms/NavItem.tsx";
import Logo from "../../assets/images/logo.png"

export default function TopBar() {
    const navs = [{label: "Inicio", path: "/"}, {label: "Bibliotecas", path: "/"}, {label: "Recursos", path: "/"}, {label: "Categorias", path: "/"}, {label: "Noticias", path: "/"}, {label: "Contacto", path: "/"}];
    return (
        <nav className="flex flex-col md:flex-row self-stretch justify-between items-center gap-4 bg-slate-900 text-white py-4 px-16">
            <img src={Logo} alt="logo" className="size-16" />
            {
                navs.map(nav => <NavItem key={nav.label} {...nav}/>)
            }
        </nav>
    );
}