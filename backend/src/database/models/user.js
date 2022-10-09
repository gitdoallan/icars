module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  userModel.associate = (models) => {
    userModel.hasMany(models.bikes, {
      foreignKey: 'user_id',
    });
    userModel.hasMany(models.reservations, {
      foreignKey: 'user_id',
    });
  };

  return userModel;
};
