const { Sequelize, DataTypes, Model } = require('sequelize');

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);

sequelize.authenticate()
    .then(() => console.log('It is ok'))
    .catch(() => console.log('There is a problem'));



class Product extends Model {

}

const properties = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'ProductName',
    },
    unitPrice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0,
        field: 'UnitPrice'
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'Stock',
        defaultValue: 0,
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        // defaultValue: Date.now(),
        field: 'CreatedDate',
    },
    updatedAt: {
        type: DataTypes.DATEONLY,
        field: 'UpdatedDate',
    },
    deletedAt: {
        type: DataTypes.DATEONLY,
        field: 'DeletedDate',
    }

}

const options = {
    sequelize,
    modelName: 'Product',
    // tableName: 'Items',
}


Product.init(properties, options);

module.exports = Product;