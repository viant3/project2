module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    petType: DataTypes.STRING,
    zip: DataTypes.STRING,
    phone: DataTypes.TEXT,
    name: DataTypes.STRING
  });
  return Example;
};
