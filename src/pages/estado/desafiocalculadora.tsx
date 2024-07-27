import TextField from "@/components/base/TextField"
import Pagina from "@/components/Pagina"
import { useState } from "react"

const DesafioCalculadora = () => {
    const [numero1, setNumero1] = useState<number | undefined>(undefined)
    const [numero2, setNumero2] = useState<number | undefined>(undefined)


    const onChangeNumero1 = (event: any) => {
        setNumero1(event.target.value)
    }

    const onChangeNumero2 = (event: any) => {
        setNumero2(event.target.value)
    }


    return <Pagina 
        titulo="Desafio Calculadora"
        subtitulo="Capítulo Estado"
    >
        <div className="flex flex-col">
            <div className="flex flex-row gap-4">
                <TextField 
                    label="Número 1" 
                    placeholder="Digite um número"
                    type="number"
                    value={numero1 as any}
                    onChange={onChangeNumero1}
                    pattern="[0-9]*"
                    />
                <TextField 
                    label="Número 2" 
                    placeholder="Digite um número"
                    type="number"
                    value={numero2 as any}
                    onChange={onChangeNumero2}
                    pattern="[0-9]*"
                />
            </div>
            <div className="flex flex-col">
                <span>Soma: {numero1 && numero2 ?  `${numero1} + ${numero2} = ${(Number(numero1) + Number(numero2))}` : '---'}</span>
                <span>Subtração: {numero1 && numero2 ?  `${numero1} - ${numero2} = ${(Number(numero1) - Number(numero2))}` : '---'}</span>
                <span>Multiplicação: {numero1 && numero2 ?  `${numero1} * ${numero2} = ${(Number(numero1) * Number(numero2))}` : '---'}</span>
                <span>Divisão: {numero1 && numero2 ?  `${numero1} / ${numero2} = ${(Number(numero1) / Number(numero2))}` : '---'}</span>
            </div>
        </div>
    </Pagina>
}

export default DesafioCalculadora