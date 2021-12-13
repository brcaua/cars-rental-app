import { Router } from "express";

import { specController } from "../modules/cars/UseCases/createSpecification";

const specRoutes = Router();

specRoutes.post("/", (request, response) => {
  return specController.handle(request, response);
});

export { specRoutes };
