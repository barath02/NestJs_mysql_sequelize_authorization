'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users', // table name
        'email', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'users', // table name
      'email', // new field name
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    ),
    ]);
  }
};