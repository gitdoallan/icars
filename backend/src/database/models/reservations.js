module.exports = (sequelize, DataTypes) => {
  const reservationsModel = sequelize.define('reservations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderTotal: DataTypes.DECIMAL,
    rate: DataTypes.BOOLEAN,
    orderStatus: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'reservations',
    underscored: true,
  });

  reservationsModel.associate = (models) => {
    reservationsModel.belongsTo(models.users, {
      foreignKey: 'userId',
    });
    reservationsModel.belongsTo(models.bikes, {
      foreignKey: 'bikeId',
    });
  };

  return reservationsModel;
};
