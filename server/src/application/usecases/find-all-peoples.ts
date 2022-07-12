import { PeopleModel } from "../../domain/models/People";
import { IPeopleRepository } from "../../domain/repositories/peoples_repository";

type TFindAllPeoples = FindAllPeoples;

type Dependencies = {
  repository: IPeopleRepository;
}

class FindAllPeoples {

  readonly repository: IPeopleRepository;

  constructor({repository}: Dependencies) {
    this.repository = repository;
  }

  async execute(): Promise<PeopleModel[]> {
    return await this.repository.getAll();
  }
}

export {
  FindAllPeoples
};

export type {
  TFindAllPeoples
};
