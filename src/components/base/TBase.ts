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