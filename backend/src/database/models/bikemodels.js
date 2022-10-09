module.exports = (sequelize, DataTypes) => {
  const bikeModelsModel = sequelize.define('bikeModels', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'bike_models',
    underscored: true,
  });

  bikeModelsModel.associate = (models) => {
    bikeModelsModel.hasMany(models.bikes, {
      foreignKey: 'model_id',
    });
  };

  return bikeModelsModel;
};
