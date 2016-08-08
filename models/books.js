module.exports = function(sequelize, DataTypes) {
    var books = sequelize.define('books', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'books',
        timestamps: false,
        classMethods: {
            associate: function(models) {
                books.belongsTo(models.genres, {
                    onDelete: "CASCADE",
                    foreignKeyConstraint: true
                });
            }
        }
    });

    return books;
};
