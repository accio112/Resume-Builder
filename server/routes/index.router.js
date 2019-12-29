const express = require('express');
const router = express.Router();

const ctrlProduct = require('../controllers/product.controller');

router.get('/', ctrlProduct.addProduct);
router.post('/', ctrlProduct.uploadSingle);
router.get('/list', ctrlProduct.getProductList);
router.get('/filter', ctrlProduct.getFilterProduct);
router.post('/filter', ctrlProduct.postFilterProduct);
router.patch('/:id', ctrlProduct.updateProduct);
router.delete('/:id', ctrlProduct.deleteProduct);
router.get('/showImage/:id', ctrlProduct.showImage);

module.exports = router;