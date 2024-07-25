import TextField from "@/components/base/TextField"
import Pagina from "@/components/Pagina"


const PaginaCampoTexto = () => {
    return <Pagina
        titulo="Campo de Texto" 
        subtitulo="Capítulo Estado"
    >
        <TextField 
            label="Nome" 
            placeholder="Digite o nome"
            onChange={(event) => console.log(event)}
        />
    </Pagina>
}

export default PaginaCampoTexto