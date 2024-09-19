import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Logo from "../../assets/images/logo.png"

export default function Footer() {
    return (
        <footer className="self-stretch  text-white grid grid-cols-12 gap-8 bg-slate-800 p-8 border border-white">
            <section className="flex flex-col gap-2 col-span-2">
                <img src={Logo} alt="company name" className="size-24" />
                <div className="flex gap-2">
                    <Facebook className="stroke-yellow-500" />
                    <MessageCircle className="stroke-yellow-500" />
                    <Instagram className="stroke-yellow-500" />
                </div>
            </section>
            <section className="col-span-5">
                <h4 className="text-lg text-yellow-500">Instituicoes Parceiras</h4>
                <ul>
                    <li>Ministerio da Educação e Desenvolvimento Humano</li>
                    <li>Universidade Eduardo Mondlane(UEM)</li>
                    <li>Insitututo Nacional de Estatística(INE)</li>
                    <li>Fundação para o Desenvolvimento da comunidade(FDC)</li>
                    <li> Associação Moçambicana de Escritores (AME)</li>
                    <li>Centro de Estudos e Investigação de Moçambique (CEIM)</li>
                </ul>
            </section>
            <section className="col-span-3">
                <h4 className="text-lg text-yellow-500">Jurídico</h4>
                <ul>
                    <li>Termos de uso</li>
                    <li>Contrato de licença</li>
                    <li>Política de Privacidade</li>
                    <li>Iinformações sobre direitos autorais</li>
                    <li> Politica de cookies</li>
                    <li>Configurações de cookies</li>
                </ul>
            </section>
            <section className="col-span-2">
                <h4 className="text-lg text-yellow-500">Informação</h4>
                <ul>
                    <li>Sobre nós</li>
                    <li>Missão</li>
                    <li>Visão</li>
                    <li>Valores</li>
                </ul>
            </section>
            <section className="col-span-12 text-center">@2024 Plataforma Educacional Integrado. Todos os direitos reservados</section>
        </footer>
    );
}