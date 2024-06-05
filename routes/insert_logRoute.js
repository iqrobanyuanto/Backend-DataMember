const router = require('express').Router();
const insert_logController = require('../controllers/insert_logController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/create', insert_logController.create);
router.get('/get', insert_logController.getAll);
router.delete('/delete', insert_logController.deleteAll);

module.exports = router;