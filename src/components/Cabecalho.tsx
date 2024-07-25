interface CabecalhoProps {
    titulo: string
    subtitulo: string
    className?: string
    [prop: string]: any
}

const Cabecalho = (props: CabecalhoProps) => {
    return (
        <div className={`
                flex flex-col
                justify-center
                p-2
                ${props.className ?? ''}
            `}
        >
            <div className={`
                flex-col 
                text-2xl
                font-bold
            `}>
                {props.titulo}
            </div>
            <div className={`
                text-sm
                font-thin
                text-zinc-300
            `}>
                {props.subtitulo}
            </div>
        </div>

    )
}

export default Cabecalho