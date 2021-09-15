'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'users', // table name
        'Password', // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'users', // table name
      'Password', // new field name
      {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    ),
    ]);
  }
};