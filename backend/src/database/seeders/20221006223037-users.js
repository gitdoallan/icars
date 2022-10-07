module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Eric',
        email: 'eric@test.com',
        password: 'password',
        role: 'admin',
      },
      {
        name: 'Allan',
        email: 'allan@test.com',
        password: 'password',
        role: 'user',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
