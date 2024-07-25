import Pagina from "@/components/Pagina"

const Page = () => {
    const renderizarTitulo = () => {
        return <h1>Funções</h1>
    }

    const renderizarConteudo = () => {
        return (
            <ul>
                <li>Ana</li>
                <li>Carlos</li>
                <li>Zico</li>
            </ul>
        )
    }

    return (
        <Pagina titulo="JSX: Chamando Funções" subtitulo="Fundamentos">
            {renderizarTitulo()}
            {renderizarConteudo()}
        </Pagina>
    )
}

export default Page;