module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'store_locations',
    [
      {
        id: 1,
        name: 'Lake Nona',
      },
      {
        id: 2,
        name: 'Downtown Orlando',
      },
      {
        id: 3,
        name: 'Winter Park',
      },
      {
        id: 4,
        name: 'Sanford',
      },
      {
        id: 5,
        name: 'Altamonte Springs',
      },
      {
        id: 6,
        name: 'Kissimmee',
      },
      {
        id: 7,
        name: 'Clermont',
      },
      {
        id: 8,
        name: 'Oviedo',
      },
      {
        id: 9,
        name: 'Winter Garden',
      },
      {
        id: 10,
        name: 'Apopka',
      },
      {
        id: 11,
        name: 'Casselberry',
      },
      {
        id: 12,
        name: 'Ocoee',
      },
      {
        id: 13,
        name: 'Winter Springs',
      },
      {
        id: 14,
        name: 'Maitland',
      },
      {
        id: 15,
        name: 'Longwood',
      },
      {
        id: 16,
        name: 'Mount Dora',
      },
      {
        id: 17,
        name: 'Oviedo',
      },
      {
        id: 18,
        name: 'Windermere',
      },
      {
        id: 19,
        name: 'Apopka',
      },
      {
        id: 20,
        name: 'Casselberry',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('store_locations', null, {}),
};
