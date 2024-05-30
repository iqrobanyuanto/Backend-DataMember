const router = require('express').Router();
const authController = require('../controllers/authController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', authController);

module.exports = router;