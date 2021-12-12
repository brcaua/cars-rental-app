import { Request, Response } from "express";

import { CreateNewCategoryUseCase } from "./CreateNewCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateNewCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
