import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateCategoryService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
