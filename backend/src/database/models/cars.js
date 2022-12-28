module.exports = (sequelize, DataTypes) => {
  const carsModel = sequelize.define('cars', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    rating: DataTypes.FLOAT,
    receivedRates: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'cars',
    underscored: true,
  });

  carsModel.associate = (models) => {
    carsModel.belongsTo(models.carModels, {
      foreignKey: 'modelId',
    });
    carsModel.belongsTo(models.carColors, {
      foreignKey: 'colorId',
    });
    carsModel.belongsTo(models.storeLocations, {
      foreignKey: 'locationId',
    });
    carsModel.hasMany(models.reservations, {
      foreignKey: 'carId',
    });
  };

  return carsModel;
};
