'use client'

import { useRegisterWolf } from "@/hooks/use-new-wolf"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import style from "./styles.module.css"
import z from "zod"

const loboSchema = z.object({
    
    nome:z.string().nonempty('Insira o nome do lobinho'),
    idade: z.coerce.number().min(0, 'Insira a idade do lobinho'),
    imagem: z.string().nonempty('Insira o link da foto do lobinho'),
    descricao: z.string().nonempty('Insira a descrição do lobinho'),
})
type LoboFormInput = z.input<typeof loboSchema>
type Lobo = z.output<typeof loboSchema>
export default function AdicionarLobinho() {
     const { register, handleSubmit, reset, formState:{errors, isSubmitting}, setError } = useForm<LoboFormInput, unknown, Lobo>({
        resolver: zodResolver(loboSchema)
    })
    
    const { execute, isPending } = useRegisterWolf({
    onSuccess: () => {
      alert("Lobinho adicionado com sucesso!");
    },
    onError: (error) => {
      alert("Erro ao adicionar lobinho: " + error.message);
    }
    });
    const onSubmit = async (data: Lobo) => {
        try {
            await execute(data);
            reset();
        } catch (error) {
            setError("root", { message: "Erro ao adicionar lobinho" });
        }
    }

    return (
    <main className={style.main}>
        <div className={style.divprincipal}>
        <p className={style.texto_centro}> Coloque um Lobinho para Adoação</p>
        

            
            <form onSubmit={handleSubmit(onSubmit)} id="form_adicionar_lobinho" className={style.form}>
                <div className={style.diva}>
                    <div className={style.divinterespecial1}>

                        <label htmlFor="nome" className={style.label}>Nome do lobinho:</label>
                        <input type="text" id="nome"  {...register("nome")} className={style.input}/>
                        {errors.nome && <span style={{color: 'red'}}>{errors.nome.message}</span>}
                    </div>
                    <div className={style.divinterespecial2}>
                        <label htmlFor="idade" className={style.label}>Idade:</label>
                        <input type="number" id="idade"  {...register("idade")} className={style.input}/>
                        {errors.idade && <span style={{color: 'red'}}>{errors.idade.message}</span>}

                    </div>

                </div>
                <div className={style.divinterna}>
                    <label htmlFor="imagem" className={style.label}>Link da Foto:</label>
                    <input type="url" id="imagem" {...register("imagem")} className={style.input}/>
                    {errors.imagem && <span style={{color: 'red'}}>{errors.imagem.message}</span>}
                </div>
                <div className={style.divinterna}>
                    <label htmlFor="descricao" className={style.label}>Descrição:</label>
                    <textarea id="descricao" {...register("descricao")} className={style.textarea}></textarea>

                </div>

                <button type="submit" disabled={isPending}> Salvar</button>
                    {isPending ? "Salvando..." :""}

            </form>
        </div>
    </main>
)}