import { Metadata } from "next";
import Image from "next/image";
export const metadata : Metadata={
  title:'Home - Adote um lobinho',
  description:'Projeto de adoção de lobinhos',
  openGraph:{
    title:'Home - Adote um lobinho',
    description:'Projeto de adoção de lobinhos',
    images:['https://www.google.com/imgres?q=lobo&imgurl=https%3A%2F%2Fmedia.gazetadopovo.com.br%2F2025%2F04%2F08165111%2Flobo-terrivel-250408.jpg&imgrefurl=https%3A%2F%2Fwww.gazetadopovo.com.br%2Fideias%2Flobo-terrivel-continua-extinto%2F&docid=X6UBS26Zdt9HqM&tbnid=mDmbdaBG4XNDeM&vet=12ahUKEwjJ5pex7vKTAxX2DbkGHUFOK8sQnPAOegUIjAEQAQ..i&w=1920&h=1282&hcb=2&ved=2ahUKEwjJ5pex7vKTAxX2DbkGHUFOK8sQnPAOegUIjAEQAQ']
  },
  robots:{
    index: true, 
    follow: true,
    nocache: true,
    googleBot:{
      index: true, 
      follow: true,
    }
  },
}
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Home</h1>
      </main>
    </div>
  );
}
