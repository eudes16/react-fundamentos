import { BaseColor, BaseProps, ButtonElevation, buttonsColors, ButtonVariant, elevationProps, variantProps } from "./TBase"

interface ButtonProps extends BaseProps {
    text: string
    elevation?: ButtonElevation
    variant?: ButtonVariant
    onClick?: (event: any) => void
    [prop: string]: any
}



const Button = (props: ButtonProps) => {
    const { text, onClick, color, elevation, variant } = props

    const _onClick = (onClick ? (event: any) => {
        onClick(event)
    } : undefined) ?? undefined

    return (
        <button
            {...props}
            style={{
                boxSizing: "border-box",
            }}
            onClick={_onClick}
            className={`
                overflow-hidden
                ${buttonsColors(color ?? 'primary', variant ?? 'filled')}
                ${elevationProps[elevation ?? 0]}
                p-2
                text-base
                rounded-md
                ${props.className ?? ''}
            `}
        >
            {text}
        </button>
    )
}

export default Button