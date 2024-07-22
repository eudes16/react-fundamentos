import Logo from "./Logo";
import Menu from "./Menu";

interface AreaLateralProps {
    [prop: string]: any
}

const componentName = "AreaLateral"

const AreaLateral = (props: AreaLateralProps) => {

    return <div
        className={`
            ${props.componentName ?? componentName}
            px-2
            bg-zinc-900
        `}
    >
        <div className={`
            flex items-center justify-center
            container-logo
            h-24
        `}
        >
            <Logo />
        </div>
        <Menu />
    </div>

}

export default AreaLateral;