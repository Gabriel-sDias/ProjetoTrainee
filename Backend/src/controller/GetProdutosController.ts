import {Request, Response} from 'express';
import { GetProdutos } from '../services/GetProdutos';




export class GetProdutosController{


    async handle (request: Request, response: Response){


        const service =  new GetProdutos();

        const produto =  await service.execute();

        return response.json(produto);

    }


}