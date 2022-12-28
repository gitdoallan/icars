module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'cars',
    [
      {
        id: 1,
        model_id: 1,
        color_id: 4,
        location_id: 1,
        image: '/images/cars/store/civic_azul.jpeg',
        price: 30,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 2,
        model_id: 1,
        color_id: 2,
        location_id: 1,
        image: '/images/cars/store/civic_branco.jpg',
        price: 30,
        rating: 5,
        received_rates: 1,
      },
      {
        id: 3,
        model_id: 1,
        color_id: 1,
        location_id: 1,
        image: '/images/cars/store/civic_preto.jpg',
        price: 30,
        rating: 4.5,
        received_rates: 2,
      },
      {
        id: 4,
        model_id: 2,
        color_id: 2,
        location_id: 1,
        image: '/images/cars/store/corolla_branco.jpg',
        price: 30,
        rating: 4,
        received_rates: 3,
      },
      {
        id: 5,
        model_id: 2,
        color_id: 1,
        location_id: 2,
        image: '/images/cars/store/corolla_preto.jpg',
        price: 30,
        rating: 3.5,
        received_rates: 4,
      },
      {
        id: 6,
        model_id: 2,
        color_id: 3,
        location_id: 2,
        image: '/images/cars/store/corolla_vermelho.jpeg',
        price: 30,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 7,
        model_id: 3,
        color_id: 4,
        location_id: 2,
        image: '/images/cars/store/fit_azul.jpg',
        price: 30,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 8,
        model_id: 3,
        color_id: 2,
        location_id: 2,
        image: '/images/cars/store/fit_branco.jpg',
        price: 30,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 9,
        model_id: 3,
        color_id: 1,
        location_id: 2,
        image: '/images/cars/store/fit_preto.jpg',
        price: 30,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 10,
        model_id: 4,
        color_id: 2,
        location_id: 2,
        image: '/images/cars/store/gol_branco.jpg',
        price: 26,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 11,
        model_id: 4,
        color_id: 1,
        location_id: 2,
        image: '/images/cars/store/gol_preto.jpg',
        price: 26,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 12,
        model_id: 4,
        color_id: 3,
        location_id: 2,
        image: '/images/cars/store/gol_vermelho.jpg',
        price: 26,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 13,
        model_id: 5,
        color_id: 2,
        location_id: 2,
        image: '/images/cars/store/golf_branco.jpg',
        price: 30,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 14,
        model_id: 5,
        color_id: 11,
        location_id: 2,
        image: '/images/cars/store/golf_cinza.jpg',
        price: 30,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 15,
        model_id: 6,
        color_id: 2,
        location_id: 2,
        image: '/images/cars/store/jetta_branco.jpg',
        price: 36,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 16,
        model_id: 6,
        color_id: 1,
        location_id: 2,
        image: '/images/cars/store/jetta_preto.jpg',
        price: 36,
        rating: 0,
        received_rates: 0,
      },
      {
        id: 17,
        model_id: 6,
        color_id: 11,
        location_id: 2,
        image: '/images/cars/store/jetta_cinza.jpg',
        price: 36,
        rating: 0,
        received_rates: 0,
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('cars', null, {}),
};
