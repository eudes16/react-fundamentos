import MenuItem from "./MenuItem"
import { IconBoxMultiple0, IconBoxMultiple1, IconBoxMultiple2, IconBraces, IconFunction, IconFileCheck, IconSitemap, IconCode, IconForms } from "@tabler/icons-react"
import MenuItemHeader from "./MenuItemHeader";

const Menu = () => {
    return <>
        <div className={`
            flex justify-start w-52 flex-col p-2 gap-2
        `}>
            <MenuItemHeader texto="Estado" />
            <MenuItem
                texto="Componente com Estado"
                title="Componente com Estado"
                url="/estado/com"
                icone={<IconCode />}
            />
            <MenuItem
                texto="Componente sem Estado"
                title="Componente sem Estado"
                url="/estado/sem"
                icone={<IconCode />}
            />
            <MenuItem
                texto="Campo de Texto"
                title="Campo de Texto"
                url="/estado/campotexto"
                icone={<IconForms />}
            />
            <MenuItemHeader texto="Fundamentos" />
            <MenuItem
                texto="JSX com JS"
                url="/fundamentos/soma"
                icone={<IconBraces />}
                title="JSX com JS"
            />
            <MenuItem
                texto="JSX: Chamando Funções"
                title="JSX: Chamando Funções"
                url="/fundamentos/funcoes"
                icone={<IconFunction />}
            />
            <MenuItem
                texto="Página #1"
                url="/fundamentos/pagina"
                icone={<IconFileCheck />}
            />
            <MenuItem
                texto="Página #2"
                url="/pagina1"
                icone={<IconSitemap />}
            />

            <MenuItemHeader texto="Componentes" />
            <MenuItem
                texto="Básico"
                url="/componente/basico"
                icone={<IconBoxMultiple0 />}
            />
            <MenuItem
                texto="Título"
                url="/componente/titulo"
                icone={<IconBoxMultiple1 />}
            />
            <MenuItem
                texto="Trecho"
                url="/componente/trecho"
                icone={<IconBoxMultiple2 />}
            />
        </div>
    </>
}

export default Menu;