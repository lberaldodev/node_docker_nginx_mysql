import { FindAllPeoples } from "../../../application/usecases/find-all-peoples";
import { Request, Response } from "express";
import { PeopleModel } from "../../../domain/models/People";

interface IPeopleController {
    index: (req: Request, res: Response) => void;
}

type Dependencies = {
    findAllPeoples: FindAllPeoples
}

class PeopleController implements IPeopleController {
    readonly dependencies: Dependencies;
   
    constructor(dependencies: Dependencies ) {
      this.dependencies = dependencies;
    }

    index = async (_req: Request, res: Response): Promise<Response<PeopleModel[]>> =>{
       const peoples = await this.dependencies.findAllPeoples.execute();
       return res.send(peoples);
    }
}
   
export {
    PeopleController
};