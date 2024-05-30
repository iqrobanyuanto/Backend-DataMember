const router = require('express').Router();
const memberController = require('../controllers/memberController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/create', memberController.create);
router.get('/get', memberController.getAll);
router.get('/get/:id', memberController.getById);
router.put('/update/:id', memberController.update);
router.delete('/delete/:id', memberController.delete);

module.exports = router;