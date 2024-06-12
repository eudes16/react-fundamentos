const Page = () => {
    const nome = 'João'
    const idade = 40

    return (
        <div>
            <div>{nome} {idade}</div>
            <div>{2 + 7}</div>
            <div>{idade * 3}</div>
            <div>{Math.random()}</div>
        </div>
    )
}

export default Page;