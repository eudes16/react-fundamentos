import Link from "next/link";

const MenuItem = (props: any) =>  {
    return (
        <Link href={props.url} className={`
            bg-zinc-900 w-full px-4 py-2 rounded-lg 
            text-xl cursor-pointer
            transition duration-1000
            hover:bg-zinc-800
        `}>
            {props.texto}
        </Link>
    )
}

export default MenuItem;