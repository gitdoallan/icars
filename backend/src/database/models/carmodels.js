module.exports = (sequelize, DataTypes) => {
  const carModelsModel = sequelize.define('carModels', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'car_models',
    underscored: true,
  });

  carModelsModel.associate = (models) => {
    carModelsModel.hasMany(models.cars, {
      foreignKey: 'modelId',
    });
  };

  return carModelsModel;
};
