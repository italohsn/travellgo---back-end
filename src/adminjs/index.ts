import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  branding: {
    companyName: 'TravellGo',
    logo: '/logoTravell.png',
    theme: {
      colors: {
        primary100: '#1B26B6',
        primary80: '#1B26B6',
        primary60: '#1B26B6',
        primary40: '#526BB9',
        primary20: '#526BB9',
        grey100: '#151515',
        grey80: '#333333',
        grey60: '#69696f',
        grey40: '#666666',
        grey20: '#dddddd',
        filterBg: '#010729',
        accent: '#030E3D',
        hoverBg: '#030E3D'
      }
    }
  }
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs)