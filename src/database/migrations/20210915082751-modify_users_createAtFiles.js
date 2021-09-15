'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users', // table name
        'createdAt', // new field name
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        },
      ),
      queryInterface.addColumn(
        'users', // table name
        'updatedAt', // new field name
        {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        },
      ),
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'createdAt'),
      queryInterface.removeColumn('users', 'updatedAt'),
    ]);
  }
};