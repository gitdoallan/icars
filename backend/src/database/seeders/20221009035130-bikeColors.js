module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'bike_colors',
    [
      {
        id: 1,
        name: 'Black',
      },
      {
        id: 2,
        name: 'White',
      },
      {
        id: 3,
        name: 'Red',
      },
      {
        id: 4,
        name: 'Blue',
      },
      {
        id: 5,
        name: 'Green',
      },
      {
        id: 6,
        name: 'Yellow',
      },
      {
        id: 7,
        name: 'Orange',
      },
      {
        id: 8,
        name: 'Purple',
      },
      {
        id: 9,
        name: 'Pink',
      },
      {
        id: 10,
        name: 'Brown',
      },
      {
        id: 11,
        name: 'Grey',
      },
      {
        id: 12,
        name: 'Silver',
      },
      {
        id: 13,
        name: 'Gold',
      },
      {
        id: 14,
        name: 'Multi-color',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('bike_colors', null, {}),
};
