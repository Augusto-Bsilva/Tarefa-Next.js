import Image from "next/image";
import AdoptForm from "@/components/AdoptForm";
import style from './styles.module.css'
import wolfProps from "@/types/wolf";
export default async function AdotarLobinho({ params }: { params: { lobo: string } }) {
    const loboId = (await params).lobo;
    const response = await fetch(`http://localhost:3333/lobinhos/${loboId}`);
    const loboData: wolfProps = await response.json();

    return (
    <main>
      
      <div className={style.diva1}>
        
          <div className={style.divfoto}>
              <Image src={loboData.imagem} alt="Foto do Lobinho" width={200} height={200} />
          </div>
          
          <div className={style.divmensagem}>

              <p className={style.divmensagem_adote}>Adote o(a) {loboData.nome}</p>
              <p className={style.divmensagem_id}>ID: {loboData.id}</p>
        
          </div>

      </div>

      <div className={style.diva}>
        <AdoptForm loboId={loboId} />
      </div> 

  </main>
    )
}