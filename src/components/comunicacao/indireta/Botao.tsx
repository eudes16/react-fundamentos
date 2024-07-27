import Button from "@/components/base/Button"
import { BaseColor } from "@/components/base/TBase"

interface BotaoProps {
    onClick: (valor: string) => void
    texto: string
    color: BaseColor
}
const Botao = (props: BotaoProps) => {
    const {onClick, texto, color} = props
    return<Button 
        text={texto}
        color={color}
        onClick={() => onClick(texto)}
    />
}

export default Botao