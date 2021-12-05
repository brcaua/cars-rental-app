import { Category } from "../model/Category";

/* 
  DTO é um meio-campo entre model, repo e routes.
  As routes não podem saber quais dados estão no model, somente o repo pode.
  Pra isso, criamos um objeto DTO na forma abaixo.
*/

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
