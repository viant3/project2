'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Sitters',
      [
        {
          lastName: 'politano',
          firstName: 'victor',
          zip: 34761,
          email: 'viant3@gmail.com',
          cats: false,
          dogs: true,
          both: false,
          rate: 30,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),

        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sitter', null, {});
  }
};