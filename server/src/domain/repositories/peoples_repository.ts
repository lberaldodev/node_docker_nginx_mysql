import { PeopleModel } from "../models/People";

interface IPeopleRepository {
  getAll(): Promise<PeopleModel[]>;
}

export { IPeopleRepository };
