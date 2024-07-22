interface ConteudoProps {
    children?: any
    [prop: string]: any
}

const Conteudo = (props: ConteudoProps) => {
    return (
        <div className={`
            flex justify-start items-start flex-1 flex-col p-2
            bg-emerald-500
            rounded-lg
            text-3xl
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}

export default Conteudo