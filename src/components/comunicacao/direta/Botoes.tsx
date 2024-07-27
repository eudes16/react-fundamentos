import Button from "@/components/base/Button"
import Valor from "./Valor"
import { useState } from "react"

const Botoes = () => {
    const [texto, setTexto] = useState('')

    const handleClick = (texto: string) => {
        setTexto(texto)
    }

    return <div>
        <div className={`
            flex flex-col gap-5 col-span-6
            bg-zinc-700 p-4 rounded-lg shadow-lg 
            ${texto === 'Pedro' ? 'shadow-green-700' : ''}
            ${texto === 'João' ? 'shadow-orange-700' : ''}
            ${texto === 'Maria' ? 'shadow-purple-700' : ''}
        `}>
            <div className="flex flex-row gap-5">
                <Button 
                    text="Maria"
                    color="primary"
                    onClick={() => handleClick('Maria')}
                    />
                <Button 
                    text="João"
                    color="secondary"
                    onClick={() => handleClick('João')}
                    />
                <Button 
                    text="Pedro"
                    color="success"
                    onClick={() => handleClick('Pedro')}
                />
            </div>
            <div className={`
                flex gap-5 p-4 rounded-lg bg-zinc-800
                ${texto === 'Pedro' ? 'text-green-700' : ''}
                ${texto === 'João' ? 'text-orange-700' : ''}
                ${texto === 'Maria' ? 'text-purple-700' : ''}
            `}>
                <Valor texto={texto} />
            </div>
        </div>
    </div>

}

export default Botoes