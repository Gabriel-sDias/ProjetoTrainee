import {Request, Response} from 'express';
import { CreateProdutos } from '../services/CreateProdutos';



export class ProdutosControllers {

    async handle (request: Request, response: Response){
        const { name, valor, quantidade } = request.body;

        const service = new CreateProdutos();

        const result = await service.execute({name, valor, quantidade});

        return response.json(result);

    }
}