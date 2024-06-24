const router = require('express').Router();
const memberController = require('../controllers/memberController');
const multer = require('multer');
const fileHandler = multer();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/create', memberController.create);
router.get('/get', memberController.getAll);
router.get('/get/:memberId', memberController.getById);
router.put('/update/:memberId', fileHandler.single('profileImage'), memberController.update);
router.delete('/delete/:memberId', memberController.delete);

module.exports = router;