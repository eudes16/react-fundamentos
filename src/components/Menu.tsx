import MenuItem from "./MenuItem";

const Menu = () => {
    return <>
        <div className={`
            flex justify-start items-center w-52 flex-col p-2 gap-2
            bg-zinc-700 text-3xl
            rounded-lg
        `}>
            <MenuItem texto="Página #1" url="/fundamentos/pagina"/>
            <MenuItem texto="Página #2" url="/pagina1"/>
        </div>
    </>
}

export default Menu;