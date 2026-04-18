export default interface wolfProps{
    id: number,
    nome: string,
    idade: number,
    descricao: string,
    imagem: string,
    adotado: boolean,
    nomeDono: string | null,
    idadeDono: number | null,
    emailDono: string | null
}

export interface adoptWolf{
    id: string,
    adotado: boolean,
    nomeDono: string,
    idadeDono: number,
    emailDono: string   
}
export interface RegisterRequest{
    nome: string;
    idade: number;
    descricao: string;
    imagem: string;
}
export interface RegisterResponse extends wolfProps {}