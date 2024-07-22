interface LogoProps {
    [prop: string]: any
}

const componentName = "Logo"

const Logo = (props: LogoProps) => {

    return <div
        className={`
            ${props.componentName ?? componentName}
            text-3xl text-white
            h-20
            w-20
            bg-purple-500
            flex items-center justify-center
            rounded-full
        `}
    >
        Logo
    </div>
}

export default Logo;