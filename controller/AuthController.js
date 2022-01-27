const UserModel = require("../models").user;
const bcrypt = require("bcrypt");



const register = async (req, res) => {

    try {
      let body = req.body;
      body.password = await bcrypt.hashSync(body.password, 10);
      const users = await UserModel.create(body);
      console.log(users);

      res.status(200).json({
        status: "Success",
        msg: "Register Berhasil",
      });
    } catch (err) {
      
    }
  }

  module.exports = {register}

