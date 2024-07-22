import AreaLateral from "./AreaLateral"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import Rodape from "./Rodape"

const Pagina = (props: any) => {
    return <>
        <div className="flex h-screen">
            <AreaLateral />
            <div className="flex flex-col flex-1">
                <Cabecalho
                    titulo={props.titulo ?? "Título"}
                    subtitulo={props.subtitulo ?? "Estou na pasta pages"}
                    className="h-16 bg-gradient-to-r bg-zinc-700 shadow-sm"
                    id="cabecalho"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape
                    textoEsquerda="Feito com ❤️ por Eudes"
                    textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
                />
            </div >
        </div >
    </>
}

export default Pagina