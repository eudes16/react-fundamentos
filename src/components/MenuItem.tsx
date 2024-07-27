import Link from "next/link";
import { removeProps } from "./base/TBase";

interface MenuItemProps {
    texto: string
    url: string
    icone: any
    active?: boolean
    [prop: string]: any
}

const MenuItem = (props: MenuItemProps) => {
    const { active, icone, url, texto } = props

    const _props = {...props}

    removeProps(_props, ['texto', 'url', 'icone', 'active'])

    return (
        <Link 
            href={url} 
            className={`
                flex gap-2 items-center
                bg-purple-700 
                w-full px-2 py-2 rounded-lg 
                cursor-pointer
                transition duration-700
                hover:bg-purple-600
                active:bg-purple-900
                ${active ? 'bg-purple-900' : ''}
                text-xs
            `}
        >
            {icone}
            {texto}
        </Link>
    )
}

export default MenuItem;