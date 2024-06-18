import Cabecalho from "@/components/Cabecalho"
import Conteudo from "@/components/Conteudo"
import Rodape from "@/components/Rodape"

const Page = () => {
    return (
        <div className={`
            flex flex-col
            h-screen
            gap-4
            p-4
        `} >
            <Cabecalho />
            <Conteudo />
            <Rodape 
                textoDireita="Feito com ❤️ por Eudes" 
                textoEsquerda="2021"
            />
        </div>
    )
}

export default Page