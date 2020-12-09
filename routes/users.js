var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;





/**

www.w3school.com/home
.../about
.../contact

.../products
.../products/add
.../products/:id/update
.../products/update
.../products/:id/delete

.../categories
.../categories/add
.../categories/:id/update
.../categories/update
.../categories/:id/delete

.../employees
.../employees/add
.../employees/update/:id
.../employees/update
.../employees/:id/delete



*/