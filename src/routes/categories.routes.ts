import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateNewCategoryService } from "../services/CreateNewCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createNewCategoryService = new CreateNewCategoryService(
    categoriesRepository
  );

  createNewCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const getCategory = categoriesRepository.list();

  return response.status(200).json(getCategory);
});

export { categoriesRoutes };
