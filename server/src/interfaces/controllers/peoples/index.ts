import { FindAllPeoplesUseCase } from "../../../application/usecases/find-all-peoples";
import { Request, Response } from "express";
import { PeopleModel } from "../../../domain/models/People";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../infra/di/types";

export interface IPeopleController {
  index: (req: Request, res: Response) => void;
}

@injectable()
class PeopleController implements IPeopleController {
  constructor(
    @inject(TYPES.FindAllPeoplesUseCase)
    private findAllPeoplesUseCase: FindAllPeoplesUseCase
  ) {}

  index = async (
    _req: Request,
    res: Response
  ): Promise<Response<PeopleModel[]>> => {
    const peoples = await this.findAllPeoplesUseCase.execute();
    return res.send(peoples);
  };
}

export { PeopleController };
