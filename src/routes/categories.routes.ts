import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  // category vai ser do tipo Category

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
