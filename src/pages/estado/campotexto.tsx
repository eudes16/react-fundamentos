import TextField from "@/components/base/TextField"
import Pagina from "@/components/Pagina"
import { IconAccessPoint } from "@tabler/icons-react"
import { useState } from "react"


const PaginaCampoTexto = () => {
    const [value, setValue] = useState('Inicial...')

    return <Pagina
        titulo="Campo de Texto" 
        subtitulo="Capítulo Estado1"
    >
        <TextField 
            color="primary"
            label="Nome" 
            placeholder="Digite o nome"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            prefix={<span><IconAccessPoint /></span>}
            helperText={value}
        />
    </Pagina>
}

export default PaginaCampoTexto