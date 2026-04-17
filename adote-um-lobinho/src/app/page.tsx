import { Metadata } from "next";
import Image from "next/image";
import Carinho from '../../public/care.png';
import Companheiro from '../../public/Frame.png';
import Resgate from '../../public/rescue-dog.png';
import Protecao from '../../public/life-insurance.png';
import WolfEx1 from '../../public/image.png';
import style from './styles.module.css';
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
    <div>
      <main>
          <section className={style.adoptSection}>
              <h1 className={style.title}>Adote um Lobinho</h1>
              <span></span>
              <p className={style.paragraph}>É claro que o consenso sobre a necessidade de qualificação apresenta tendências no sentido de aprovar a manutenção das regras de conduta normativas.</p>
          </section>
           <section className={style.aboutSection}>
              <h2 className={style.subtitle}>Sobre</h2>
              <p className={style.paragraph}>Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.</p>
          </section>
          <section className={style.valuesSection}>
            <h2 className={style.subtitle}>Valores</h2>
            <ul>
                <li>
                    <div className={style.valueSymbol}>
                        <Image src={Protecao} alt="Símbolo de Proteção" />
                    </div>
                    <h3 className={style.subSubtitle}>Proteção</h3>
                    <p className={style.paragraph}>
                        Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                    </p>
                </li>
                <li>
                    <div className={style.valueSymbol}>
                        <Image src={Carinho} alt="Símbolo de Carinho" />
                    </div>
                    <h3 className={style.subSubtitle}>Carinho</h3>
                    <p className={style.paragraph}>
                        Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                    </p>
                </li>
                <li>
                    <div className={style.valueSymbol}>
                        <Image src={Companheiro} alt="Símbolo de Companheirismo" />
                    </div>
                    <h3 className={style.subSubtitle}>Companheirismo</h3>
                    <p className={style.paragraph}>
                        Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                    </p>
                </li>
                <li>
                    <div className={style.valueSymbol}>
                        <Image src={Resgate} alt="Símbolo de Resgate" />
                    </div>
                    <h3 className={style.subSubtitle}>Resgate</h3>
                    <p className={style.paragraph}>
                        Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.
                    </p>
                </li>
            </ul>
        </section>
        <section className={style.exampleSection}>
          <h2 className={style.subtitle}>Lobos Exemplo</h2>
          
          <div className={style.wolfsSection}>
              <div className={style.wolfCard}>
                  <div className={style.wolfImageContainer}>
                      <div className={style.wolfImageBack}></div>
                      <Image src={WolfEx1} alt="Exemplo de Lobo 1" className={style.wolfImagePic} />
                  </div>
                  
                  <div className={style.wolfInfo}>
                      <div className={style.wolfInfoHeader}>
                          <h3 className={style.subSubtitle}>Nome do Lobo</h3>
                          <p><span>Idade: XX anos</span></p>
                      </div>
                      <p className={style.paragraph}>
                          Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.
                      </p>
                  </div>
              </div>
              
              <div className={style.wolfCard}>
                  <div className={style.wolfImageContainer}>
                      <div className={style.wolfImageBack}></div>
                      <Image src={WolfEx1} alt="Exemplo de Lobo 2" className={style.wolfImagePic} />
                  </div>
                  
                  <div className={style.wolfInfo}>
                      <div className={style.wolfInfoHeader}>
                          <h3 className={style.subSubtitle}>Nome do Lobo</h3>
                          <p><span>Idade: XX anos</span></p>
                      </div>
                      <p className={style.paragraph}>
                          Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas. Não obstante, o surgimento do comércio virtual faz parte de um processo de gerenciamento do levantamento das variáveis envolvidas.
                      </p>
                  </div>
              </div>
            </div>
        
        </section>
      </main>
    </div>
  );
}
