import Link from "next/link";

interface MenuItemProps {
    texto: string
    url: string
    icone: any
    [prop: string]: any
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <Link href={props.url} className={`
            flex gap-2 items-center
            bg-purple-500 w-full px-4 py-2 rounded-lg 
            cursor-pointer
            transition duration-1000
            hover:bg-purple-800
            active:bg-purple-900
        `}>
            {props.icone}
            {props.texto}
        </Link>
    )
}

export default MenuItem;