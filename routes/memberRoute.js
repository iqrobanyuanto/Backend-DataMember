const router = require('express').Router();
const memberController = require('../controllers/memberController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/create', memberController.create);
router.get('/get', memberController.getAll);
router.get('/get/:memberId', memberController.getById);
router.put('/update/:memberId', memberController.update);
router.delete('/delete/:memberId', memberController.delete);

module.exports = router;