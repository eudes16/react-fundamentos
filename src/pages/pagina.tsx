import Cabecalho from '@/components/Cabecalho'
import '../app/globals.css'
import Conteudo from '@/components/Conteudo'
import Rodape from '@/components/Rodape'

const Pagina = () => {
    const data = new Date().getFullYear()
    return (
        <div className={`
            flex flex-col
            h-screen
            gap-5
            p-5
            bg-black text-white
        `}>
            <Cabecalho 
                titulo="Minha Página"
                subtitulo="Estou na pasta pages"
            />
            <Conteudo />
            <Rodape 
                textoEsquerda="Feito com ❤️ por Eudes"
                textoDireita={`Desenvolvido em ${data}`}
            />
        </div>
    )
}

export default Pagina