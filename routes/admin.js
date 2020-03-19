const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

//admin/edit-product => get
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/edit-product/id Edit
router.post('/edit-product', adminController.postEditProduct);

// // delete
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
