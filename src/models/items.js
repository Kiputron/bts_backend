/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"items",
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			item_name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			item_code: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			unit: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			purchase_price: {
				type: DataTypes.DECIMAL(),
				allowNull: false,
			},
			selling_price: {
				type: DataTypes.DECIMAL(),
				allowNull: false,
			},

			category_id: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			tableName: "items",
		}
	);
};
