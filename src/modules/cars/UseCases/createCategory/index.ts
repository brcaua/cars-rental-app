import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateNewCategoryUseCase } from "./CreateNewCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateNewCategoryUseCase(
  categoriesRepository
);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
