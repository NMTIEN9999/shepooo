const users = require('../models/userModel');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const found = users.find(user => user.username === username && user.password === password);
  if (found) {
    res.json({ success: true, message: 'Đăng nhập thành công' });
  } else {
    res.json({ success: false, message: 'Sai thông tin đăng nhập' });
  }
};
