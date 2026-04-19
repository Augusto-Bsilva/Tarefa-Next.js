import wolfProps from "@/types/wolf";
import Image from "next/image";
import style from './styles.module.css'
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function LoboPage({ params } : {params: Promise<{lobo: string}>}){
    const loboId = (await params).lobo;
    const response = await fetch(`http://localhost:3333/lobinhos/${loboId}`);
    const Lobo: wolfProps = await response.json();
    async function deleteWolf(){
        'use server'
        await fetch(`http://localhost:3333/lobinhos/${loboId}`, {
            method: 'DELETE',
        });
        revalidatePath('/lista-de-lobinhos');
        redirect('/lista-de-lobinhos')

    }
    return(
        <main className={style.main}>
        <h1 className={style.title}>{Lobo.nome}</h1>
        <section className={style.wolfSection}>
            <div className={style.imgBtnSide}>
                
                <div className={style.wolfImage}>
                    {Lobo?.imagem ? (
              <Image src={Lobo.imagem} alt={`Foto do lobo ${Lobo.nome}`} width={430} height={328} className={style.wolfImage} />
            ) : (
              <p>Imagem indisponível</p>
            )}
                </div>

                <div className={style.btnsDiv} id="botoes">
                    <Link href="/adotar-lobinho" className={style.btnAdopt}  id="adoption-bttn">ADOTAR</Link>
                    <form action={deleteWolf}>
                    <button  type='submit' className={style.btnDelete} id= "exclude-bttn">EXCLUIR</button>
                    </form>

                
                </div>
            
            </div>

            <div className={style.descriptionSide}>
                <p className={style.paragraph}>
                    {Lobo.descricao}
                </p>
            </div>

        </section>
    </main>
    )
}
