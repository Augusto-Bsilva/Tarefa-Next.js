import type { ListState } from "../types/state";
import { useQuery } from "@tanstack/react-query";
import { wolfService } from "@/services/wolf-service";

export function useWolfs(page: number = 1,adotado?: boolean, nome?: string): ListState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['lobinhos-lista',page,adotado,nome],
        queryFn: async ()=>wolfService.wolfs(page,4,adotado,nome).then((res) => res.data),
        refetchInterval: 1000 * 60 * 5
    });
    return (
        {
            data,
            error: error ?? undefined,
            isPending,
            isError,
            isSuccess,
            execute:() => refetch()
        }
        
    )
}