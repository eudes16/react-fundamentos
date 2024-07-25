import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

interface LogoProps {
    [prop: string]: any
}

const componentName = "Logo"

const Logo = (props: LogoProps) => {

    return <Link 
        href="/"
        className={`
            ${props.componentName ?? componentName}
            text-white
            bg-purple-700
            flex items-center justify-center
            flex-1
            h-16
            px-5
            gap-2.5
        `}
    >
        <IconBrandReact size={30}  stroke={1}/>
        <span className="text-2xl font-bold">React</span>
    </Link>
}

export default Logo;