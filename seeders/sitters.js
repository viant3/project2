'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Sitters',
      [
        {
          name: 'Marcus Ellington', 
          zip: 32803,
          email: 'Mike@gmail.com',
          phone: '407-998-9999',
          rate: 45,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()'),

        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sitters', null, {});
  }
};