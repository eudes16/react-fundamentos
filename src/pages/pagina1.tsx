
import '../app/globals.css'
import Pagina from '@/components/Pagina'

const Pagina1 = () => {
    const data = new Date().getFullYear()
    return (
        <Pagina titulo="Minha Página" subtitulo="Estou na pasta pages">
            <h1>Página 1</h1>
            <p>Estou na pasta pages</p>
            <p>Desenvolvido em {data}</p>
        </Pagina>
    )
}

export default Pagina1