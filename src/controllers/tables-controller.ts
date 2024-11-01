import { NextFunction, Request, Response } from "express"
import { knex } from "@/database/knex"

class TablesController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const tables = await knex<TableRepository>("tables").select().orderBy("table_number")

      return res.json(tables)
    } catch (error) {
      next(error)
    }
  }
}

export { TablesController }