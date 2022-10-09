module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'user_id',
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
      orderTotal: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
        field: 'order_total',
      },
      rate: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      orderStatus: {
        allowNull: false,
        type: Sequelize.ENUM('pending', 'confirmed', 'cancelled'),
        field: 'order_status',
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'start_date',
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'end_date',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('reservations');
  },
};
