import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import Menu from "./Menu"
import Rodape from "./Rodape"

const Pagina = (props: any) => {
    return <>
        <div className="flex h-screen gap-4 p-4 bg-zinc-500">
            <Menu />
            <div className="flex flex-col gap-4 flex-1">
                <Cabecalho
                    titulo={props.titulo ?? "Título"}
                    subtitulo={props.subtitulo ?? "Estou na pasta pages"}
                    className="h-24 bg-gradient-to-r from-emerald-600 to-blue-900 shadow-xl"
                    id="cabecalho"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape
                    textoEsquerda="Feito com ❤️ por Eudes"
                    textoDireita={`Desenvolvido em ${new Date().getFullYear()}`}
                />
            </div>
        </div>
    </>
}

export default Pagina