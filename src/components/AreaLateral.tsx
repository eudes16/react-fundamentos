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
            bg-zinc-900
        `}
    >
        <div className={`
            h-16
            flex items-center justify-center
            container-logo
        `}
        >
            <Logo />
        </div>
        <Menu />
    </div>

}

export default AreaLateral;