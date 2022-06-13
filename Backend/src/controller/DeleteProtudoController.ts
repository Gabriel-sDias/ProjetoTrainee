import { Request, Response } from "express";
import {DeleteProduto} from '/home/gabriel/projetoRocketseat/Backend/src/services/DeleteProduto'



export class DeleteProdutoController{


    async handle(request:Request, response:Response){

        const {id} = request.params;

        const service = new DeleteProduto();

        const result = await service.execute(id);

        if(result instanceof Error){

            return response.status(400).json(result.message);

        }

        return response.status(200).end();
    }


}