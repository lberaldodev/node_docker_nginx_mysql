import { inject, injectable } from "inversify";
import { TYPES } from "../../infra/di/types";
import { PeopleModel } from "../../domain/models/People";
import { IPeopleRepository } from "../../domain/repositories/peoples_repository";

type TFindAllPeoplesUseCase = FindAllPeoplesUseCase;

@injectable()
class FindAllPeoplesUseCase {
  constructor(
    @inject(TYPES.PeopleRepository)
    private peopleRepository: IPeopleRepository
  ) {}

  execute = async (): Promise<PeopleModel[]> => {
    return await this.peopleRepository.getAll();
  };
}

export { FindAllPeoplesUseCase };

export type { TFindAllPeoplesUseCase };
