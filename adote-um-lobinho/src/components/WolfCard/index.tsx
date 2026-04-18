
import style from './style.module.css';
import Image from 'next/image';
import wolfProps  from '../../types/wolf';
import Link from 'next/link';
export default function WolfCard({ lobo }: { lobo: wolfProps }){
  return(
        <li className={style.wolfListItem}> 
            <div className={style.square}>
                <Image 
                    src={lobo.imagem} 
                    className={style.wolfImg} 
                    alt={lobo.nome}
                    width={430} 
                    height={328}
                />
            </div>
            <div className={style.wolfInfo}> 
                <div className={style.wolfNameButton}>
                    <div className={style.wolfTitleAge}> 
                        <h2>{lobo.nome}</h2>
                        <p>Idade: {lobo.idade} anos</p> 
                    </div>
                    {lobo.adotado ? (
                        <button className={style.wolfAdoptedButton} disabled>Adotado</button> 
                    ) : (
                        <Link href={`/lista-de-lobinhos/${lobo.id}`} className={style.wolfAdoptButton}>Adotar</Link>
                    )}
                </div>
                <p className={style.descriptionText}>{lobo.descricao}</p>
                {lobo.adotado && (<p className={style.ownerText}>Adotado por: {lobo.nomeDono}</p>)}
            </div>
        </li>
    );
}