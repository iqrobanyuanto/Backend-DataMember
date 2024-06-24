const router = require('express').Router();
const fotoProfilController = require('../controllers/fotoProfilController');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

router.use(bodyParser.json());

router.post('/updateImage/:memberId', upload.single('profileImage'), fotoProfilController.updater);
router.get('/getImage/:memberId', fotoProfilController.getter);

module.exports = router;