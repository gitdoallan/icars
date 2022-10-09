module.exports = (sequelize, DataTypes) => {
  const bikesModel = sequelize.define('bikes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    modelId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    rating: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'bikes',
    underscored: true,
  });

  bikesModel.associate = (models) => {
    bikesModel.belongsTo(models.bikeModels, {
      foreignKey: 'model_id',
    });
    bikesModel.belongsTo(models.bikeColors, {
      foreignKey: 'color_id',
    });
    bikesModel.belongsTo(models.storeLocations, {
      foreignKey: 'location_id',
    });
    bikesModel.hasMany(models.reservations, {
      foreignKey: 'bike_id',
    });
  };

  return bikesModel;
};
