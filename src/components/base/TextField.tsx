import { ReactNode } from "react"
import { BaseColor, removeProps, TextFieldColors } from "./TBase"

interface TextFieldProps {
    label?: string
    value?: string
    prefix?: ReactNode
    sufix?: ReactNode
    className?: string
    id?: string
    name?: string
    placeholder?: string
    type?: string
    helperText?: ReactNode
    error?: boolean
    color?: BaseColor
    onFocus?: (event: any) => void
    onKeyPress?: (event: any) => void
    onKeyUp?: (event: any) => void
    onChange: (event: any) => void
    [prop: string]: any
}

const TextField = (props: TextFieldProps) => {
    const { label, value, onChange, prefix, sufix, helperText } = props
    const _props = {...props}

    removeProps(_props, ['label', 'value', 'prefix', 'sufix', 'helperText'])

    return (
        <div className="flex flex-col">
            <label className="text-field-label">
                <span className="label">{label ?? ''}</span>
                <div className="text-field-container">
                    {prefix ? (<div className="text-field-prefix">
                        {prefix}
                    </div>) : null}
                    <input
                        {..._props as any}
                        value={value}
                        onChange={onChange}
                        className={`
                            ${TextFieldColors[props.color ?? 'primary'] ?? 'text-field-primary'}
                            ${props.className ?? ''}
                        `}
                    />
                    {sufix ? (<div className="text-field-sufix">
                        {sufix}
                    </div>) : null}
                </div>
                {helperText ? (<span className="text-field-helper">{helperText}</span>) : null}
            </label>
        </div>
    )
}

export default TextField