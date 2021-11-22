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

class CategoriesRepository {
  private categories: Category[];

  // mesmo que const categories = []
  // em TS não usamos const
  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    // assinalando para category as propriedades de Category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
