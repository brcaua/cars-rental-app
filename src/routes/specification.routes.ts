import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateNewSpecificationService } from "../services/CreateNewSpecificationService";

const specRoutes = Router();

const specRepo = new SpecificationRepository();

specRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createNewSpecService = new CreateNewSpecificationService(specRepo);

  createNewSpecService.execute({ name, description });

  return res.status(201).send();
});

export { specRoutes };
