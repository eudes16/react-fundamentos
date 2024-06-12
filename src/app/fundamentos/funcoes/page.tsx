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
        <div>
            {renderizarTitulo()}
            {renderizarConteudo()}
        </div>
    )
}

export default Page;