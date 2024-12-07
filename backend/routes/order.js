const express = require('');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();


router.route('/order').post(createOrder);

module.exports = router;