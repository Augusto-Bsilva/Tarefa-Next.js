import "./globals.css";
import Header  from '../components/Header/index';
import { Metadata } from "next";
import { Darker_Grotesque } from 'next/font/google';
import Footer from '../components/Footer/index';

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] });

export const metadata : Metadata={
  title:'Adote um lobinho',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${darkerGrotesque.className} min-h-screen flex flex-col` }>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
