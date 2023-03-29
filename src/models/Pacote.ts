import { DataTypes, Optional, Model } from "sequelize"
import { sequelize } from "../database"

export interface Pacote {
  id: number
  name:string
  synopsisCard: string
  position: number
  price: string 
  synopsis: string
  thumbnailUrl: string
}

export interface PacoteCreationAttributes extends Optional<Pacote, 'id' | 'thumbnailUrl' >{ }

export interface PacoteInstance extends Model<Pacote, PacoteCreationAttributes>, Pacote { }

export const Pacote = sequelize.define<PacoteInstance, Pacote>('Pacote', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  synopsisCard: {
    allowNull: false,
    type: DataTypes.STRING
  },
  position: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  price: {
    allowNull: false,
    type: DataTypes.STRING
  },
  synopsis: {
    allowNull: false,
    type: DataTypes.STRING
  },
  thumbnailUrl: {
    type: DataTypes.STRING
  },
})