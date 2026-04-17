import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css'; 
import Logo from '../../../public/paws.png'
import Map from '../../../public/placeholder-for-map.png'
import CallIcon from '../../../public/call-answer.png'
import EmailIcon from '../../../public/envelope.png'
export default function Footer(){
    return (
    <footer className={styles.footer}>
        <div className={styles.iframeContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14700.922543994864!2d-43.14969114458004!3d-22.904862500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817dce2f93eb%3A0x9e97773b91b93bba!2sUniversidade%20Federal%20Fluminense%20-%20Campus%20Praia%20Vermelha!5e0!3m2!1spt-BR!2sbr!4v1770153325464!5m2!1spt-BR!2sbr" 
                width="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.enderecos}>
                    <div className={styles.localizacao}>
                        <Image className={styles.iconImages} src={Map} alt="Ícone de localização" />
                        <p>Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ, 24210-315</p>
                    </div>
                    <div className={styles.telefone}>
                        <Image className={styles.iconImages} src={CallIcon} alt="Ícone de telefone" />
                        <p>(99) 99999-9999</p>
                    </div>
                    <div className={styles.email}>
                        <Image className={styles.iconImages} src={EmailIcon} alt="Ícone de email" />
                        <p>salve-lobos@lobINhos.com</p>
                    </div>
                    <Link href="/quem-somos" className={styles.quemSomosBtn}>Quem Somos</Link>
                </div>
                <div className={styles.footerLogoContainer}>
                <p>Desenvolvido com</p>
                <Image className={styles.pataLogo} src={Logo} alt="Logo das patas" />
            </div>
    </footer>
    );
}