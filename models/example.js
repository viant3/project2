module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    type: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
