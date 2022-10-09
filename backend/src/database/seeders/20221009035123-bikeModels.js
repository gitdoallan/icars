module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'bike_models',
    [
      {
        id: 1,
        name: 'Bonvelo',
      },
      {
        id: 2,
        name: 'BZEN',
      },
      {
        id: 3,
        name: 'Mate',
      },
      {
        id: 4,
        name: 'Cairn',
      },
      {
        id: 5,
        name: 'Canyon',
      },
      {
        id: 6,
        name: 'Angell',
      },
      {
        id: 7,
        name: 'MODMO',
      },
      {
        id: 8,
        name: 'Sushi Bikes',
      },
      {
        id: 9,
        name: 'Mokumono',
      },
      {
        id: 10,
        name: 'BEEQ',
      },
      {
        id: 11,
        name: 'Turbine Bicycles',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('bike_models', null, {}),
};
