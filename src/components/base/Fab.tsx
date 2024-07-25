import { BaseProps, ButtonElevation, ButtonVariant, elevationProps, variantProps } from "./TBase"

interface ButtonProps extends BaseProps {
    text?: string
    elevation?: ButtonElevation
    variant?: ButtonVariant
    onClick?: (event: any) => void
    [prop: string]: any
}

const Fab = (props: ButtonProps) => {
    const { text, onClick, color, elevation, variant, children} = props

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
                ${variantProps[variant ??  'filled']}${color ?? 'primary'}
                ${elevationProps[elevation ?? 0]}
                p-2
                text-base
                rounded-full
                ${props.className ?? ''}
            `}
        >
            {children ?? text ?? ''}
        </button>
    )
}

export default Fab