import { getRepository } from "typeorm";
import { produtos } from "../entities/produtos";

type ProdutosRequest = {
    name: string;
    valor: number;
    quantidade: number;
}



export class CreateProdutos{


    async execute({name, valor, quantidade}:ProdutosRequest):Promise<produtos>{
         
        const repo = getRepository(produtos);

        const produto = repo.create({
            name,
            valor,
            quantidade
        })

        await repo.save(produto);

        return produto;
    }
}