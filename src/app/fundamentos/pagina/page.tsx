'use client';
import '@/app/globals.css'
import Pagina from "@/components/Pagina"

const Page = () => {

    const executar = () => {
        console.log('O botão foi pressionado!!')
    }

    return (
        <Pagina titulo="Minha Página" subtitulo="Estou na pasta App">
            <button 
                onClick={() =>  {
                    executar()
                }}
                className="bg-blue-500 p-2 rounded-md" 
            >
                Teste
            </button>
        </Pagina>
    )
}

export default Page