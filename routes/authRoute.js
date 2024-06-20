const router = require('express').Router();
const authController = require('../controllers/authController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/loginAdmin', authController.loginAdmin);
router.post('/registerAdmin', authController.registerAdmin);
router.post('/registerMember', authController.registerMember);
router.post('/loginMember', authController.loginMember);
router.delete('/deleteMember/:accountMemberId', authController.deleteMemberAccount);

module.exports = router;