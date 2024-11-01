import { AppError } from "@/utils/AppError"

import { ZodError } from "zod"

import { Request, Response, NextFunction } from "express"

export function errorHandling(error: any, req: Request, res: Response, _: NextFunction) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    return res.status(400).json({ message: "validation error", issues: error.format() })
  }

  return res.status(500).json({ message: error.message })
}