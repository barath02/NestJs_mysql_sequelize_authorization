'use strict';

const { AllowNull } = require("sequelize-typescript");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'mobileNumber',
        {
          type: Sequelize.BIGINT(11),
          allowNull: false,
        }
      )
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'users', // table name
        'mobileNumber',
        {
          type: Sequelize.BIGINT(11),
          allowNull: false,
        }
      ),
    ]);
  }
};
