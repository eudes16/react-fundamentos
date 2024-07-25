import { ReactNode } from "react"

interface TextFieldProps {
    label: string
    value?: string
    prefix?: ReactNode
    sufix?: ReactNode
    onChange: (event: any) => void
    [prop: string]: any
}

const TextField = (props: TextFieldProps) => {
    const { label, value, onChange, prefix, sufix} = props

    return (
        <div className="flex flex-col">
            <label className="text-field-label">
                {label}
                <div className="text-field-container">
                    {prefix ? (<div className="text-field-prefix">
                        {prefix}
                    </div>) : null}
                    <input
                        // {..._props}
                        value={value}
                        onChange={onChange}
                        className={`
                            text-field-secondary
                            ${props.className ?? ''}
                            `}
                            />
                    {sufix ? (<div className="text-field-sufix">
                        {sufix}
                    </div>) : null}
                </div>
                <span className="text-field-helper">0/100</span>
            </label>
        </div>
    )
}

export default TextField