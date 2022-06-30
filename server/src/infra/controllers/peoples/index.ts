import { Request, Response } from "express";

interface IPeopleController {
    index(req: Request, res: Response): Promise<Response>;
}

class PeopleController implements IPeopleController {
    async index(_: Request, res: Response): Promise<Response> {
        return res.send("hello world");
    }
}

export {
    PeopleController
};