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
            bg-zinc-800
            border-t border-zinc-700
            text-base
            text-zinc-500
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