import Link from "next/link";
import Logo from "../../../public/logo-lobinho.png";
import Image from "next/image";
import styles from './styles.module.css'; 
export default function Header(){
    return (
        <header className={styles.header}>
             <nav className={styles.nav}>
                <Link href="/lista-de-lobinhos" className={styles.navLink}>Nossos Lobinhos</Link>
                <Link href="/"><Image src={Logo} alt="Logo do Lobinho" /></Link>
                <Link href="/quem-somos" className={styles.navLink}>Quem Somos</Link>
            </nav>
        </header>
    );
}