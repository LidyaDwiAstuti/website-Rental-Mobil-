npm install express axios sequelize pg ejs nodemon
Pages :
Index = http://localhost:8000/
index
List= http://localhost:8000/list
Update = http://localhost:8000/update

Endpoint :

// GET
http://localhost:8000/api/cars       = get all car data from database
http://localhost:8000/api/cars/:id   = get car from database based on car id
http://localhost:8000/api/size       = get all car sizes from database

// DELETE
http://localhost:8000/api/delete/:id = delete car based on car id from database

// POST
http://localhost:8000/api/cars         = post new car data to database
http://localhost:8000/api/cars/:id     = post edited car data based on car id to database

Contoh request body & response body :
request body : input nama, harga sewa, ukuran mobil, dan url gambar mobil di page list.
response body : Data mobil-mobil yang ditampilkan di halaman awal.