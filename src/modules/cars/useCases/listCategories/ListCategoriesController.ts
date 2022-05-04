import { Request, Response } from "express"

import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

class ListCategoriesController {
    constructor (private listCategoiesUseCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategoiesUseCase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController }