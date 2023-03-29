import { ResourceOptions } from "adminjs";

export const pacoteResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: [
    "name",
    "synopsisCard",
    "position",
    "price",
    "synopsis",
    "uploadThumbnail",
  ],
  filterProperties: [
    "name",
    "synopsisCard",
    "position",
    "price",
    "synopsis",
    "createdAt",
    "updatedAt",
  ],
  listProperties: [
    "id", 
    "name",
    "position", 
    "price"
  ],
  showProperties :[
    "id",
    "name",
    "synopsisCard",
    "position",
    "price",
    "synopsis",
    "thumbnailUrl",
    "createdAt",
    "updatedAt",
  ],
}