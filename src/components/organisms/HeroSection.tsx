import HeroImage from '@/assets/images/header-image.jpg'
export default function HeroSection() {
    return <div className='flex self-stretch h-screen w-full bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className='flex w-full h-full bg-black bg-opacity-50 justify-start items-center p-8'>
            <h3 className='text-white text-5xl max-w-3xl'>Seja bem vindo á Plataforma Integrada de Bibliotecas: Simplifique sua busca e acesse Livros, artigos, revistas e materiais de Diversas biliotecas em um só lugar</h3>
        </div>
    </div>;
}