module.exports = (sequelize, DataTypes) => {
  const reservationsModel = sequelize.define('reservations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    modelId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    orderTotal: DataTypes.DECIMAL,
    orderStatus: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'reservations',
    underscored: true,
  });

  return reservationsModel;
};
