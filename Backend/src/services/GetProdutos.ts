import { getRepository } from "typeorm";
import { produtos } from "../entities/produtos";


export class GetProdutos{


    async execute(){


        const repo = getRepository(produtos);
        const produto = await repo.find();

        return produto;
    }
}