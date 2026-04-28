'use client';

import { useAdoptWolf } from "@/hooks/use-adopt-wold";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z, { email } from "zod";
import style from "./styles.module.css"
import { useRouter } from "next/navigation";

    const adoptSchema = z.object({
        
        nomeDono:z.string().nonempty('Insira o nome do lobinho'),
        idadeDono: z.coerce.number().min(0, 'Insira a idade do lobinho'),
        emailDono: z.string().email('Insira um email válido'),

    })
    type AdoptFormInput = z.input<typeof adoptSchema>
    type AdoptForm = z.output<typeof adoptSchema>
    export default function AdoptForm({ loboId }: { loboId: string }) {
        const router = useRouter();
        const { register, handleSubmit, reset, formState:{errors, isSubmitting}, setError } = useForm<AdoptFormInput, unknown, AdoptForm>({
            resolver: zodResolver(adoptSchema)
        })
        
        const { execute, isPending } = useAdoptWolf({
        onSuccess: () => {
            alert("Lobinho adotado com sucesso!");
            reset();
            router.push('/lista-de-lobinhos')
        },
        onError: (error) => {
          alert("Erro ao adotar lobinho: " + error.message);
        }
        });
        const onSubmit = (data: AdoptForm) => {
            const adoptParams = {
                ...data,
                id: Number(loboId),
                adotado: true,
            };
            execute(adoptParams);
        }
    return (
            <form  id="formAdopt" onSubmit={handleSubmit(onSubmit)} className={style.form}>
            
              <div className={style.diva2}>
                
                  <div className={style.divinomeEidade}>
                    
                    <div className={style.divnome}>
                      
                        <label htmlFor="nome">Seu Nome:</label>
                        <input type="text" id="nome" {...register("nomeDono")}/>
                        {errors.nomeDono && <span className={style.error}>{errors.nomeDono.message}</span>}
                    </div>
                    
                    <div className={style.dividade}>
                      
                        <label htmlFor="idade">Idade:</label>
                        <input type="number" id="idade"  {...register("idadeDono")}/>
                        {errors.idadeDono && <span className={style.error}>{errors.idadeDono.message}</span>}
                    
                    </div>
                
                </div>
                
                <div className={style.divemail}>
                  
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email"   {...register("emailDono")}/>
                    {errors.emailDono && <span className={style.error}>{errors.emailDono.message}</span>}

                </div>

                  
              </div>    
                  
              <div className={style.diva3}>
                
                <div className={style.divbotao}>
                  
                    <button className={style.botao_adotar} type="submit" id="btn_adpt" disabled={isPending || isSubmitting}> 
                        {isPending ? "Adotando..." : "Adotar"}
                    </button>

                </div>

              </div>
        
          </form>
    )
}