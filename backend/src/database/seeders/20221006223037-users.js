module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    // demo password is password hashed with bcrypt
    [
      {
        name: 'Eric',
        email: 'eric@test.com',
        password: '$2b$10$aEyH2ZtKvpEQm9d7iYdgJO6b3wmxEAjSeguLoLwrUkmWY0N.74hl2',
        role: 'admin',
      },
      {
        name: 'Allan',
        email: 'allan@test.com',
        password: '$2b$10$kr0yuGPlPO1fX8J3sPLdXOmEMBkEvIrncKawXZaf7JiMOZHHIK2cK',
        role: 'user',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
