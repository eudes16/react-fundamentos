'use client'

import MenuItem from "./MenuItem"
import { IconBoxMultiple0, IconBoxMultiple1, IconBoxMultiple2, IconBraces, IconFunction, IconFileCheck, IconSitemap, IconCode, IconForms, IconNumbers, IconArrowMoveDown, IconArrowMoveUp } from "@tabler/icons-react"
import MenuItemHeader from "./MenuItemHeader"
import { usePathname } from 'next/navigation'

const Menu = () => {

    const asPath = usePathname()

    console.log('asPath', asPath)

    return <>
        <div className={`
            flex justify-start w-52 flex-col p-2 gap-2
        `}>
            <MenuItemHeader texto="Comunicação" />
            <MenuItem
                texto="Comunicação Direta"
                title="Comunicação Direta"
                url="/comunicacao/direta"
                active={asPath === '/comunicacao/direta'}
                icone={<IconArrowMoveDown />}
            />
            <MenuItem
                texto="Comunicação Indireta"
                title="Comunicação Indireta"
                url="/comunicacao/indireta"
                active={asPath === '/comunicacao/indireta'}
                icone={<IconArrowMoveUp />}
            />
            <MenuItemHeader texto="Estado" />
            <MenuItem
                texto="Componente com Estado"
                title="Componente com Estado"
                url="/estado/com"
                active={asPath === '/estado/com'}
                icone={<IconCode />}
            />
            <MenuItem
                texto="Componente sem Estado"
                title="Componente sem Estado"
                url="/estado/sem"
                active={asPath === '/estado/sem'}
                icone={<IconCode />}
            />
            <MenuItem
                texto="Campo de Texto"
                title="Campo de Texto"
                url="/estado/campotexto"
                active={asPath === '/estado/campotexto'}
                icone={<IconForms />}
            />
            <MenuItem
                texto="Desafio Calculadora"
                title="Desafio Calculadora"
                url="/estado/desafiocalculadora"
                active={asPath === '/estado/desafiocalculadora'}
                icone={<IconNumbers />}
            />
            <MenuItemHeader texto="Fundamentos" />
            <MenuItem
                texto="JSX com JS"
                title="JSX com JS"
                url="/fundamentos/soma"
                active={asPath === '/fundamentos/soma'}
                icone={<IconBraces />}
            />
            <MenuItem
                texto="JSX: Chamando Funções"
                title="JSX: Chamando Funções"
                url="/fundamentos/funcoes"
                active={asPath === '/fundamentos/funcoes'}
                icone={<IconFunction />}
            />
            <MenuItem
                texto="Página #1"
                url="/fundamentos/pagina"
                active={asPath === '/fundamentos/pagina'}
                icone={<IconFileCheck />}
            />
            <MenuItem
                texto="Página #2"
                url="/pagina1"
                active={asPath === '/pagina1'}
                icone={<IconSitemap />}
            />

            <MenuItemHeader texto="Componentes" />
            <MenuItem
                texto="Básico"
                url="/componente/basico"
                active={asPath === '/componente/basico'}
                icone={<IconBoxMultiple0 />}
            />
            <MenuItem
                texto="Título"
                url="/componente/titulo"
                active={asPath === '/componente/titulo'}
                icone={<IconBoxMultiple1 />}
            />
            <MenuItem
                texto="Trecho"
                url="/componente/trecho"
                active={asPath === '/componente/trecho'}
                icone={<IconBoxMultiple2 />}
            />
        </div>
    </>
}

export default Menu;