module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'car_models',
          key: 'id',
        },
        field: 'model_id',
      },
      colorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'car_colors',
          key: 'id',
        },
        field: 'color_id',
      },
      locationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'store_locations',
          key: 'id',
        },
        field: 'location_id',
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      rating: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      receivedRates: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
        field: 'received_rates',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('cars');
  },
};
