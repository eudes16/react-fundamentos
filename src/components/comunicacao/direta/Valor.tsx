interface ValorProps {
    texto: string
}

const Valor = (props: ValorProps) => {
    return (
        <div className="text-8xl font-black mt-8">
            <span>{props.texto}</span>
        </div>
    )
}

export default Valor