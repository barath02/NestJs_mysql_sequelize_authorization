'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users', // table name
        'Password', // new field name
        {
          type: Sequelize.TEXT,
          allowNull: false,

        },
      ),
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'Password'),
    ]);
  }
};