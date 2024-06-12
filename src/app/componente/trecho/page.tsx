const Page = () => {
    // let trecho = <h1>Trecho #1</h1>
    const trechos = [
        <h1 key='1'>Trecho #1</h1>,
        <h1 key='2'>Trecho #2</h1>,
        <h1 key='3'>Trecho #3</h1>
    ]

    return trechos[2]
}

export default Page;