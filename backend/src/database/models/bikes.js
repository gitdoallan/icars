module.exports = (sequelize, DataTypes) => {
  const bikesModel = sequelize.define('bikes', {
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
    tableName: 'bikes',
    underscored: true,
  });

  bikesModel.associate = (models) => {
    bikesModel.belongsTo(models.bikeModels, {
      foreignKey: 'modelId',
    });
    bikesModel.belongsTo(models.bikeColors, {
      foreignKey: 'colorId',
    });
    bikesModel.belongsTo(models.storeLocations, {
      foreignKey: 'locationId',
    });
    bikesModel.hasMany(models.reservations, {
      foreignKey: 'bikeId',
    });
  };

  return bikesModel;
};
