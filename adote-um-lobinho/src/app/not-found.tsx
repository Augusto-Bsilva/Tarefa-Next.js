import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
            <p className="text-lg mb-8">Ops! A página que você está procurando não existe.</p>
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Voltar para Home
            </Link>
        </div>
    )
}