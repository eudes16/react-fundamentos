const Rodape = (props: any) => {
    return (
        <div className={`
            flex flex-row justify-between items-center
            h-36
            rounded-lg
            bg-cyan-600
            text-xl
            p-4
        `}>
            <div className={`
                
            `}>
                {props.textoEsquerda}
            </div>
            <div>
                {props.textoDireita}
            </div>
        </div>
    )
}

export default Rodape;