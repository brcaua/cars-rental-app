import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const spec = new SpecificationRepository();
const specUseCase = new CreateSpecificationUseCase(spec);
const specController = new CreateSpecificationController(specUseCase);

export { specController };
