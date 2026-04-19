'use client';
import style from './styles.module.css';
import Image from 'next/image';
import  wolfProps  from '../../types/wolf'; 
import { useWolfs } from '@/hooks/use-wolfs';
import { useState } from 'react';
import WolfCard from '@/components/WolfCard';
import Link from 'next/link';
import WolfCard2 from '@/components/WolfCard2';



export default function ListaDeLobinhos(){
    const [page, setPage] = useState(1);
    const {data, error, isPending, isError, isSuccess} = useWolfs(page);
    const totalPages = data ? Math.ceil(data.totalCount / 4) : 1;
    const maxPageButtons = 5;
    let start = Math.max(1, page -2);
    let end = Math.min(totalPages, start + maxPageButtons - 1);

    if(end - start < maxPageButtons - 1){
        start = Math.max(1, end - maxPageButtons + 1);
    }
    const pageNumbers = Array.from({length: end - start + 1}, (_, i) => start + i);






    if (isPending) return <p>Carregando lobinhos...</p>;
    if (isError) return <p className={style.error}>Erro ao carregar lista.</p>;
    return(
        <main>
            <section className={style.search}>
                <nav className={style.searchBar}>
                    <div className={style.inputPawSet}>
                        <button className={style.searchPaw}></button>
                        <input type="text" name="nome" id="bar" className={style.bar}/>
                        <p  className={style.errorCase}></p>
                    </div>
                    <Link href="/adicionar-lobinho" id="add-link" className={style.addLink}><button id="add-lobo" className={style.addLobo}>+ Lobo</button></Link>
                </nav>
                <div className={style.adoptedFilter}>
                    <input type="checkbox" name="check" id="check" className={style.check}/>
                    <p>Ver lobinhos adotados</p>
                </div>
            </section>
            <section>
                <ul className={style.wolfIist}>
                    {isSuccess && data && data.wolfs.length > 0 ? (
                        data.wolfs.map((lobo: wolfProps) => (
                          lobo.id % 2 === 0 ? <WolfCard2 key={lobo.id} lobo={lobo} /> : <WolfCard key={lobo.id} lobo={lobo} />
                        ))
                    ) : (
                        <p>Nenhum lobo encontrado.</p>
                    )}
                </ul>
            </section>
        <nav className={style.paginationContainer}>
            <ul id="pagination" className={style.paginationList}>
                    <li onClick={() => setPage(1)} className={page === 1 ? style.paginationButtonDisabled : style.paginationButton}>
                        &lt;&lt;
                    </li>
                    {pageNumbers.map((num) => (
                        <li key ={num} onClick={() => setPage(num)} className={page === num ? style.paginationButtonActive : style.paginationButton}>
                            {num}
                        </li>
                    ))}
                    <li onClick={() => setPage(totalPages)} className={page === totalPages ? style.paginationButtonDisabled : style.paginationButton}>
                        &gt;&gt;
                    </li>
            </ul>
        </nav>
    </main>

    )
}

