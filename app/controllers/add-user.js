const User = require('../models/addDeleteUser');

exports.getAddUser = (req, res, next) => {
    res.render('add-user', { title: 'Add User' });
  };

exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    User.save(name, email, pass);
    res.redirect('/');
  };

exports.deleteUser = (req, res, next) => {
    const email = req.body.email;
    User.deleteUser(email);
    res.redirect('/');
}