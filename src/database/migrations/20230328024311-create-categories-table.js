'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pacotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      synopsis_card: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      position: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      thumbnail_url: {
        type: Sequelize.DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable('pacotes')
  }
};
