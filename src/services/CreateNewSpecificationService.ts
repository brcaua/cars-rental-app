import { ISpecificationRepository } from "../modules/cars/repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateNewSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specAlreadyExists = this.specificationRepository.findByName(name);

    if (specAlreadyExists) {
      throw new Error("Spec already exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateNewSpecificationService };
