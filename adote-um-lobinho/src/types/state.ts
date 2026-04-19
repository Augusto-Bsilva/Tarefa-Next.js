import type wolfProps from "./wolf";
import { adoptWolf, RegisterRequest, RegisterResponse } from "./wolf";

export interface ApiHookState<TPayload, TData>{
    data?:TData;
    error?: Error;
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    execute: (payload: TPayload) => void;
    reset?: ()=> void;
}

export type ListState = ApiHookState<void,{ wolfs: wolfProps[], totalCount: number }>;
export type RegisterState = ApiHookState<RegisterRequest, RegisterResponse>
export type AdoptState = ApiHookState<adoptWolf, RegisterResponse>