import { ResourceWithOptions } from "adminjs"
import { Pacote } from "../../models"
import { pacoteResourceOptions } from "./pacote"

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Pacote,
    options: pacoteResourceOptions
  }
]