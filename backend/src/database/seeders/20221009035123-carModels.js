module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'car_models',
    [
      {
        id: 1,
        name: 'Honda Civic',
      },
      {
        id: 2,
        name: 'Toyotta Corolla',
      },
      {
        id: 3,
        name: 'Honda Fit',
      },
      {
        id: 4,
        name: 'Wolksvagem Gol',
      },
      {
        id: 5,
        name: 'Wolksvagem Golf',
      },
      {
        id: 6,
        name: 'Wolksvagem Jetta',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('car_models', null, {}),
};
