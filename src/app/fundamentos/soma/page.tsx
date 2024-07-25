import Pagina from "@/components/Pagina";

const Page = () => {
    const nome = 'João'
    const idade = 40

    return (
        <Pagina titulo="JSX com JS" subtitulo="Fundamentos">
            <div>{nome} {idade}</div>
            <div>{2 + 7}</div>
            <div>{idade * 3}</div>
            <div>{Math.random()}</div>
        </Pagina>
    )
}

export default Page;