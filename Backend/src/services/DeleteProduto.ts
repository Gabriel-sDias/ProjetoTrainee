import { getRepository} from "typeorm";
import { produtos } from "../entities/produtos";


export class DeleteProduto{

    async execute (id:string ){

        const repo = getRepository(produtos);

        if(!await repo.findOne(id)){
            return new Error('Produto não exitente');
        }

        await repo.delete(id);

    }



}