import { useState } from "react"
import Botao from "./Botao"

const Valor = () => {
    const [texto, setTexto] = useState('Inicial')
    return (
        <div className={`
            flex flex-col gap-5 col-span-6
            bg-zinc-700 p-4 rounded-lg shadow-lg 
            ${texto === 'Pedro' ? 'shadow-green-700' : ''}
            ${texto === 'João' ? 'shadow-orange-700' : ''}
            ${texto === 'Maria' ? 'shadow-purple-700' : ''}
        `}>
            <div className={`
                flex gap-5 p-4 rounded-lg bg-zinc-800 text-8xl
                ${texto === 'Pedro' ? 'text-green-700' : ''}
                ${texto === 'João' ? 'text-orange-700' : ''}
                ${texto === 'Maria' ? 'text-purple-700' : ''}
            `}>
                {texto}
            </div>

            <div className="flex flex-row gap-5">
                <Botao onClick={setTexto} texto="Maria" color="primary" />
                <Botao onClick={setTexto} texto="João" color="secondary" />
                <Botao onClick={setTexto} texto="Pedro" color="success" />
            </div>

        </div>
    )
}

export default Valor