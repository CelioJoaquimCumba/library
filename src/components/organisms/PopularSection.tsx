import BookCard from "../molecules/BookCard";

export default function PopularSection() {
    const books = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg',
    src: 'https://www.amazon.com/Hobbit-J-R-R-Tolkien/dp/054792822X',
    title: 'The Hobbit'
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
    src: 'https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934',
    title: '1984'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF1000,1000_QL80_.jpg',
    src: 'https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X',
    title: 'Harry Potter and the Sorcerer\'s Stone'
  },
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg',
    src: 'https://www.amazon.com/To-Kill-Mockingbird-Harper-Lee/dp/0060935464',
    title: 'To Kill a Mockingbird'
  },
  {
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg',
    src: 'https://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0618640150',
    title: 'The Lord of the Rings'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uDKzWrmyFem7QC_TvCNMyAy6rapIKLVoBA&s',
    src: 'https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565',
    title: 'Pride and Prejudice'
  }
];
    return (
        <div className="flex flex-col self-stretch bg-slate-800 p-8 text-white">
            <h3 className="w-full text-center text-2xl font-medium">Mais populares e recomendados</h3>
            <article className="md:grid gap-4 md:grid-cols-12">
                <section className="flex flex-col gap-4 border border-white p-4 md:col-span-3">
                    <div className="flex flex-col gap-2">
                        <h4 className="bg-yellow-500 p-2 text-slate-800 text-lg font-bold flex justify-center">Funcionalidades Principais</h4>
                        <ul className="flex flex-col gap-2">
                            <li><b>Integração de Bibliotecas:</b>Conecte-se a bibliotecas escolares, publicas, academicas e muito mais.</li>
                            <li><b>Pesquisa Unificada</b>Encontre livros, artigos, periodicos e outros materiais</li>
                            <li><b>Bibliotecas Físicas</b>Visualize e localize livros disponiveis em bibliotecas fisicas.</li>
                            <li><b>Categorias por nível de ensino</b>Filtre e encontre materiais de acordo com os niveis de ensino: Basico, Fundamental, Medio, Medio Tecnico, Profissional, Livenciatura e outros.</li>
                            <li><b>Areas de interesse</b>Filtre recursos por areas de interesse especificas.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="bg-yellow-500 p-2 text-slate-800 text-lg font-bold flex justify-center">Leitura e Download</h4>
                        <ul className="flex flex-col gap-2">
                            <li><b>Leitura Online:</b>Acesse o conteudo dos livros diretamente na nossa plataforma, sem a necessidade de downloads</li>
                            <li><b>Download</b>Baixe libros e artigos para ler offline a qualquer momento, em qualquer momento, em qualquer dispositivo.</li>
                            <li><b>Formatos compativeis</b>Disponivel em formato PDF para garantir a melhor experiencia de leitura.</li>
                        </ul>
                        <p>Acesse e baxe os recursos sem a necessidade de criar uma conta ou fazer login</p>
                    </div>
                </section>
                <section className="grid md:grid-cols-4 gap-4 border border-white p-4 col-span-9 auto-rows-min">
                    {
                        books.map(book => <BookCard key={book.src} title={book.title} image={book.image} src={book.src} />  )
                    }
                </section>
            </article>
        </div>
    );
}