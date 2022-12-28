module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('car_colors', {
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
    await queryInterface.dropTable('car_colors');
  },
};
