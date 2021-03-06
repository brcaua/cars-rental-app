import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateNewCategoryUseCase } from "./CreateNewCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateNewCategoryUseCase(
  categoriesRepository
);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
