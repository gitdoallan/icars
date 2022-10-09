module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bike_models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('bike_models');
  },
};
