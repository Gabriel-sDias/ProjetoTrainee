import { getRepository} from "typeorm";
import { produtos } from "../entities/produtos";


type ProdutosRequest = {
    id: string;
    name: string;
    valor: number;
    quantidade: number;
}



export class UpdateProduto{

    async execute ({id, name, valor, quantidade}){

        const repo = getRepository(produtos);

        const produto = await repo.findOne(id);

        if(!produto){
            return new Error('produto inexistente');
        }
      
        produto.name= name ? name : produto.name;
        produto.valor= valor ? valor : produto.valor;
        produto.quantidade= quantidade ? quantidade : valor.quantidade;

        await repo.save(produto);


        return produto;
    }



}