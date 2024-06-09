const router = require('express').Router();
const bodyParser = require('body-parser');
const alurPendidikanController = require('../controllers/alurPendidikanController');

router.use(bodyParser.json());

router.post('/create/:memberId/:rowRiwayat',alurPendidikanController.create);
router.get('/getAll/:memberId',alurPendidikanController.getAll);
router.put('/update/:memberId/:rowRiwayat',alurPendidikanController.update);
router.delete('/delete/:memberId/:rowRiwayat',alurPendidikanController.delete);

module.exports = router;