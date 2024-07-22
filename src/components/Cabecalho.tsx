interface CabecalhoProps {
    titulo: string
    subtitulo: string
    className?: string
    [prop: string]: any
} 

const Cabecalho = (props: CabecalhoProps) => {
    console.log(props)
    return (
        <div className={`
            flex 
            flex-col
            justify-center items-center 
            text-3xl
            rounded-lg bg-purple-500 
            ${props.className ?? ''}
        `}>
            {props.titulo}
            <div className={`
                text-lg
                font-thin
            `}>
                {props.subtitulo}
            </div>
        </div>
    )
}

export default Cabecalho