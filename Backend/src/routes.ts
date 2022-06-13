import { Router } from 'express';
import { DeleteProdutoController } from './controller/DeleteProtudoController';
import { GetProdutosController } from './controller/GetProdutosController';
import {ProdutosControllers} from './controller/ProdutosController'
import { UpdateProdutoController } from './controller/UpdateProdutoCrontroller';
import { DeleteProduto } from './services/DeleteProduto';
import { UpdateProduto } from './services/UpdateProduto';

const routes = Router();

routes.post('/produtos', new ProdutosControllers().handle);
routes.get('/produtos', new GetProdutosController().handle);
routes.delete('/produtos/:id', new DeleteProdutoController().handle);
routes.put('/produtos/:id', new UpdateProdutoController().handle);
export { routes };
