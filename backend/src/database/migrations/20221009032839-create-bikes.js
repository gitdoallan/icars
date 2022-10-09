module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bikes', {
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
          model: 'bike_models',
          key: 'id',
        },
        field: 'model_id',
      },
      colorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bike_colors',
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
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('bikes');
  },
};
