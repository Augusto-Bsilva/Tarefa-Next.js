
import wolfProps, { RegisterRequest, RegisterResponse } from "@/types/wolf";
import { httpAdapter } from "../lib/adapter";
import type { HttpResponse } from "../types/http";
import { baseService } from "./base-service";


class WolfService extends baseService {
    
    public async wolfs(page: number = 1,limit: number = 4, adotado?: boolean, nome?: string): Promise<HttpResponse<wolfProps[]>>{
        const queryParams: Record<string, string | boolean> = {
        _page: String(page),
        _limit: String(limit),
        };
        
        if(adotado !== undefined){
            queryParams.adotado = String(adotado);
        }
        if(nome !== undefined && nome.trim() !== ""){
            queryParams['nome_like'] = String(nome);
        }
        return this.execute<void, wolfProps[]>({

            method:"GET",
            url: '/lobinhos',
            params: queryParams
        })
    }
    public async adoptWolf(id: string, adotado: boolean, nomeDono: string, idadeDono: number, emailDono: string): Promise<HttpResponse<wolfProps>> {
    return this.execute<{adotado: boolean, nomeDono: string, idadeDono: number, emailDono: string}, wolfProps>({
        method: "PATCH",
        url: `/lobinhos/${id}`,
        data: {
            adotado: adotado,
            nomeDono: nomeDono,
            idadeDono: idadeDono,
            emailDono: emailDono


        }
    })
    }
    public async registerWolf(data: RegisterRequest):Promise<HttpResponse<RegisterResponse>>{
        return this.execute<RegisterRequest, RegisterResponse>({
            data,
            method:"POST",
            url: '/lobinhos'
        })
    }
}

export const wolfService = new WolfService(httpAdapter)