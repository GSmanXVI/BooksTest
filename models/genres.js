module.exports = function(sequelize, DataTypes) {
    var genres = sequelize.define('genres', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'genres',
        timestamps: false,
        classMethods: {
            associate: function(models) {
                genres.hasMany(models.books);
            }
        }
    });

    return genres;
};
