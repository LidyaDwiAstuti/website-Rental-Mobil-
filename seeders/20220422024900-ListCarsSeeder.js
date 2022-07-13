'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('tbl_cars', [{
        name: "Avanza Test-1",
        harga: 10000,
        url_image: "https://www.otomotifer.com/wp-content/uploads/2019/01/Spesifikasi-dan-Harga-Toyota-Avanza.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 2

      },
      {
        name: "Toyota",
        harga: 450000,
        url_image: "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/update-harga-mobil-toyota-februari-2020-yaris-mulai-rp-246-juta-avanza-dibanderol-rp-194-jutaan.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 2
      },
      {
        name: "Honda",
        harga: 230000,
        url_image: "https://www.autos.id/wp-content/uploads/2021/10/2-3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 3
      },
      {

        name: "Daihatsu",
        harga: 530000,
        url_image: "https://ad-cms-daihatsu.imgix.net/uploads/productvariant/1623911997631.png?w=280&h=auto&q=65&fm=jpg&auto=format&fit=max&crop=center",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 1
      },
      {
        name: "Mitsubishi",
        harga: 330000,
        url_image: "https://asset.kompas.com/crops/cNbevtftXAhyPekI4pxYD9OdxoQ=/300x0:1920x1080/490x326/data/photo/2021/04/07/606d3d3f8d2af.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 2
      },
      {
        name: "KIA",
        harga: 320000,
        url_image: "https://www.otomotifo.com/wp-content/uploads/2017/04/Harga-Mobil-Kia-Picanto.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 3
      },
      {
        name: "Nissan",
        harga: 310000,
        url_image: "https://www.otomotifer.com/wp-content/uploads/2019/02/Harga-Mobil-Nissan-Livina.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 1
      },
      {
        name: "Datsun",
        harga: 420000,
        url_image: "https://www.semisena.com/wp-content/uploads/2020/01/Datsun-GO-Live-F.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 2
      },
      {
        name: "Mazda",
        harga: 410000,
        url_image: "https://www.carmudi.co.id/journal/wp-content/uploads/2018/09/Mazda_CX3_FL_OneU_Ext-2-850x567.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 3
      },
      {
        name: "BMW",
        harga: 800000,
        url_image: "https://www.otomotifo.com/wp-content/uploads/2017/09/Harga-Mobil-BMW-Terbaru-1200x900.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_size: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};