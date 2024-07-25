// 'use client'
import { IconPlus } from '@tabler/icons-react'
import Pagina from "@/components/Pagina"


const PaginaSemEstado = () => {
    let numero = 0

    const incrementar = () => {
        numero += 1
        console.log(numero)
    }

    return <Pagina 
        titulo="Sem estado" 
        subtitulo="Capítulo estado"
    >
        <div>
            <span>Valor: </span>
            <span>{numero}</span>
        </div>
        <button 
            onClick={incrementar}
            className={`
                bg-purple-700 hover:bg-purple-600 
                text-white text-sm 
                flex gap-2 items-center
                font-bold py-2 px-4 rounded
            `}
        >
            <IconPlus size={20} />
            Incrementar
        </button>
    </Pagina>
}

export default PaginaSemEstado