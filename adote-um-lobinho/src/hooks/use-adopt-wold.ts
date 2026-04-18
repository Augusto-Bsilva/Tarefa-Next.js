import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {  AdoptState } from "../types/state";
import type {  adoptWolf, RegisterResponse } from "../types/wolf";
import { wolfService } from "@/services/wolf-service";

export function useAdoptWolf(callbacks?: { 
    onSuccess?: (data:RegisterResponse) =>void 
    onError?: (error:Error) => void;

}): AdoptState{
    
    const queryClient = useQueryClient();
    
    const { data, error, isPending, isError, isSuccess, mutate, reset } = useMutation({
        mutationKey:["adopt"],
        
        mutationFn: async(adoptParams: adoptWolf)=> 
            wolfService.adoptWolf(adoptParams.id, adoptParams.adotado, adoptParams.nomeDono, adoptParams.idadeDono, adoptParams.emailDono).then((res) => res.data),
            onSuccess:(responseData)=>{
                queryClient.invalidateQueries({ queryKey: ["lobinhos-lista"] });
                if(callbacks?.onSuccess){
                    callbacks.onSuccess(responseData);
                }
            },
            onError:  callbacks?.onError
    
    })

    return {
        data,
        error: error ?? undefined,
        isPending,
        isError,
        isSuccess,
        execute:mutate,
        reset,
    }
} 