'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    title: DataTypes.STRING,
    list: DataTypes.INTEGER,
    client: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    import: DataTypes.BOOLEAN
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
  };
  return Plan;
};