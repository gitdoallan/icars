module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'bikes',
    [
      {
        id: 1,
        model_id: 1,
        color_id: 1,
        location_id: 1,
        image: '/images/bikes/1/main.jpeg',
        price: 10,
        rating: 0,
        stock: 1,
      },
      {
        id: 2,
        model_id: 1,
        color_id: 2,
        location_id: 1,
        image: '/images/bikes/2/main.jpeg',
        price: 10,
        rating: 5,
        stock: 1,
      },
      {
        id: 3,
        model_id: 1,
        color_id: 3,
        location_id: 1,
        image: '/images/bikes/3/main.jpeg',
        price: 10,
        rating: 4.5,
        stock: 1,
      },
      {
        id: 4,
        model_id: 2,
        color_id: 1,
        location_id: 1,
        image: '/images/bikes/4/main.jpeg',
        price: 10,
        rating: 4,
        stock: 1,
      },
      {
        id: 5,
        model_id: 2,
        color_id: 1,
        location_id: 2,
        image: '/images/bikes/5/main.jpeg',
        price: 10,
        rating: 3.5,
        stock: 1,
      },
      {
        id: 6,
        model_id: 2,
        color_id: 2,
        location_id: 2,
        image: '/images/bikes/6/main.jpeg',
        price: 10,
        rating: 0,
        stock: 1,
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('bikes', null, {}),
};
