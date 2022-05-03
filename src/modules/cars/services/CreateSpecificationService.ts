import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlredyExisitis =
      this.specificationRepository.findByName(name);

    if (specificationAlredyExisitis) {
      throw new Error("Specification already exixtis!!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
