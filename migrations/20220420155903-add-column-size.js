'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'tbl_cars',
      'id_size', {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_sizes',
          key: 'id'
        },
        allowNull: false,
        foreignKey: true

      }
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};