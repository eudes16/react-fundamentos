interface MenuItemHeaderProps {
    texto: string
    [name: string]: any

}

const MenuItemHeader = (props: MenuItemHeaderProps) => {
    return <div 
        className={`
            text-sm text-zinc-500 pl-3 pt-4
            ${props.className ?? ""}
        `}
    >
        <div>{props.texto}</div>
    </div>
}

export default MenuItemHeader;