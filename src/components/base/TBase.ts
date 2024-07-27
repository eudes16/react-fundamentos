export type BaseColor = 'primary' | 'secondary' | 'default' | 'success' | 'danger' | 'warning' | 'info'
export type ButtonElevation = 0 | 1 | 2 | 3 | 4 | 5
export type ButtonVariant = 'outlined' | 'filled' | 'text'

export const elevationProps = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow-md',
    3: 'shadow-lg',
    4: 'shadow-xl',
    5: 'shadow-2xl',
}

export const variantProps = {
    'outlined': 'btn-outline-',
    'filled' : 'btn-',
    'text': 'btn-text-',
}

export interface BaseProps {
    className?: string
    children?: any
    color?: BaseColor
    [prop: string]: any
}

export const TextFieldColors = {
    primary: 'text-field-primary',
    secondary: 'text-field-secondary',
    default: 'text-field-default',
    success: 'text-field-success',
    danger: 'text-field-danger',
    warning: 'text-field-warning',
    info: 'text-field-info',
}

const butonTextColors = {
    primary: 'btn-text-primary',
    secondary: 'btn-text-secondary',
    default: 'btn-text-default',
    success: 'btn-text-success',
    danger: 'btn-text-danger',
    warning: 'btn-text-warning',
    info: 'btn-text-info',
}

const buttonFilledColors = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    default: 'btn-default',
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
}

const buttonOutlinedColors = {
    primary: 'btn-outline-primary',
    secondary: 'btn-outline-secondary',
    default: 'btn-outline-default',
    success: 'btn-outline-success',
    danger: 'btn-outline-danger',
    warning: 'btn-outline-warning',
    info: 'btn-outline-info',
}

export const buttonsColors = (color: BaseColor, variantProps: ButtonVariant): string => {
    if (variantProps === 'text') {
        return butonTextColors[color]
    }

    if (variantProps === 'outlined') {
        return buttonOutlinedColors[color]
    }
    
    return buttonFilledColors[color]
}

export const removeProps = (props: any, keys: string[]) => {
    const _props = {...props}

    keys.forEach(key => {
        delete _props[key]
    })

    return _props
}