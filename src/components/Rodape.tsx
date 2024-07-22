interface RodapeProps {
    textoEsquerda: string
    textoDireita: string
    [prop: string]: any
}

const Rodape = (props: any) => {
    return (
        <div className={`
            flex flex-row justify-between items-center
            h-20
            rounded-lg
            bg-cyan-600
            text-xl
            p-4
            ${props.className ?? ''}
        `}>
            <div>
                {props.textoEsquerda}
            </div>
            <div>
                {props.textoDireita}
            </div>
        </div>
    )
}

export default Rodape;