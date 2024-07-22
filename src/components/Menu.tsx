import MenuItem from "./MenuItem"
import { IconHome, Icon360View } from "@tabler/icons-react"

const Menu = () => {
    return <>
        <div className={`
            flex justify-start items-center w-52 flex-col p-2 gap-2
        `}>
            <MenuItem
                texto="Página #1"
                url="/fundamentos/pagina"
                icone={<IconHome />}
            />
            <MenuItem
                texto="Página #2"
                url="/pagina1"
                icone={<Icon360View />}
            />
        </div>
    </>
}

export default Menu;