import { ProductController } from "@/controllers/products-controller"
import { Router } from "express"

const productsRoutes = Router()
const productsController = new ProductController()

productsRoutes.get("/", productsController.index)

export { productsRoutes }