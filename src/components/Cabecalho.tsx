const Cabecalho = (props: any) => {
    return (
        <div className={`
            flex 
            flex-col
            justify-center items-center 
            text-3xl
            h-36
            rounded-lg bg-purple-500 
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