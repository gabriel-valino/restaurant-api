import { ProductController } from "@/controllers/products-controller"
import { Router } from "express"

const productsRoutes = Router()
const productsController = new ProductController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", productsController.create)
productsRoutes.put("/:id", productsController.update)
productsRoutes.delete("/:id", productsController.remove)

export { productsRoutes }