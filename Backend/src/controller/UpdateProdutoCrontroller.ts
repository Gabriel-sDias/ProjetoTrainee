import { Request, Response} from "express";
import { UpdateProduto } from "../services/UpdateProduto";



export class UpdateProdutoController{

    async handle(request: Request, response: Response){

        const {id} = request.params;

        const {name, valor, quantidade}= request.body;


        const service = new UpdateProduto();

        const result = await service.execute({id, name, valor , quantidade});

        if (result instanceof Error){

            return response.status(400).json(result.message);

        }

        return response.json(result); 

    }




}