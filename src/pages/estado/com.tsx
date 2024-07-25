// 'use client'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import Pagina from "@/components/Pagina"
import { useState } from 'react'
import Button from '@/components/base/Button'
import Fab from '@/components/base/Fab'


const PaginaComEstado = () => {
    const [numero, setNumero] = useState(0)
    const [delta, setDelta] = useState(1)

    const incrementar = () => {
        setNumero(numero + delta)
    }

    const decrementar = () => {
        const novoNumero = numero - delta < 0 ? 0 : numero - delta
        setNumero(novoNumero)
    }

    const incrementarDelta = () => {
        setDelta(delta + 1)
    }

    const decrementarDelta = () => {
        setDelta(delta - 1)
    }

    return <Pagina 
        titulo="Com estado" 
        subtitulo="Capítulo estado"
    >
        <div 
            className={`
                flex justify-center items-center
                h-full
                w-full
                flex-col
                text-9xl font-bold
                gap-5
            `}
        >
            <div 
                className={`
                    text-zinc-500
                    text-9xl
                    flex justify-center items-center flex-col
                `}
            >
                <span className="text-xs">
                    Contador
                </span>
                {numero}
            </div>
            <div 
                className={`
                    flex gap-2    
                `}
            >
                <Fab 
                    variant='filled'
                    onClick={decrementar}
                    disabled={numero === 0} 
                >
                    <IconMinus size={30} />
                </Fab>

                <Fab 
                    variant='filled'
                    onClick={incrementar}
                >
                    <IconPlus size={30} />
                </Fab>
            </div>
            <div className="flex gap-5 flex-row items-center">
                <Fab 
                    color='warning'
                    variant='outlined'
                    onClick={decrementarDelta}
                    disabled={delta === 1} 
                >
                    <IconMinus size={20} />
                </Fab>
                <span className="text-xs">Incrementar em: <span className='text-purple-500'>{delta}</span></span>                
                <Fab
                    color='warning'
                    variant='outlined'
                    onClick={incrementarDelta}
                >
                    <IconPlus size={20} />
                </Fab>
            </div>
        </div>
    </Pagina>
}

export default PaginaComEstado