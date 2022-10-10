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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      bikeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bikes',
          key: 'id',
        },
        field: 'bike_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
        type: Sequelize.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
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
