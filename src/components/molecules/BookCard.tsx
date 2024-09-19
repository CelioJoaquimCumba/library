import { Button } from "../atoms/button"

export default function BookCard(props: {image: string, src: string, title: string}) {
    const {image, src, title} = props
    console.log(image, src)

    const handleDownload = () => {
        console.log('downloading...')
    }
    const handleOnlineRead = () => {
        console.log('reading...')
    }
    return (
        <div className="flex flex-col gap-2 bg-yellow-500 p-2 rounded-2xl h-fit">
            <img className="w-full aspect-[3/4] rounded-2xl" src={image} alt={title} />
            <Button className="w-full rounded-3xl" onClick={handleOnlineRead}>Ler Online</Button>
            <Button className="w-full rounded-3xl" onClick={handleDownload}>Download</Button>
        </div>
    )
}