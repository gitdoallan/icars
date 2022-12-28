module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'reservations',
    [
      {
        id: 1,
        user_id: 1,
        car_id: 1,
        order_total: 10,
        rate: true,
        order_status: 'confirmed',
        start_date: '2021-10-12',
        end_date: '2021-10-15',
      },
      {
        id: 2,
        user_id: 1,
        car_id: 2,
        order_total: 10,
        rate: true,
        order_status: 'confirmed',
        start_date: '2021-10-12',
        end_date: '2021-10-13',
      },
      {
        id: 3,
        user_id: 1,
        car_id: 3,
        order_total: 10,
        rate: false,
        order_status: 'cancelled',
        start_date: '2021-10-12',
        end_date: '2021-10-13',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('reservations', null, {}),
};
