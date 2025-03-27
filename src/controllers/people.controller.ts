import { Request, Response } from "express";
import test_services from "../services/people.service.js";

const get_all_people = async (req: Request, res: Response) => {
  const people = await test_services.get_all_people();
  res.json({'data':people})

};

const test_controller = {
  get_all_people,
};

export default test_controller;
