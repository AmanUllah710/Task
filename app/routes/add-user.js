var express = require('express');
var router = express.Router();

const addUser = require('../controllers/add-user');

/* GET home page. */
router.get('/', addUser.getAddUser);

router.post('/', addUser.postAddUser);

router.delete('/:email', addUser.deleteUser);

module.exports = router;
