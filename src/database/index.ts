import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'travellgo_development',
  username: 'italohsn',
  password: 'danialvescuiaba',
  define: {
    underscored: true
  }
})