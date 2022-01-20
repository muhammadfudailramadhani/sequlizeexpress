const UserModel = require("../models").user;

const index = async (req, res) => {
  try {
    const users = await UserModel.findAll({
      attributes: ["id", "name", "email", "status", "jenisKelamin"],
    });
    console.log(users);

    return res.json({
      status: "Success",
      msg: "Daftar users telah di temukan",
      users: users,
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }
};
const detail = async (req, res) => {
  try {
    const { id } = req.params;

    const users = await UserModel.findBypk(id);
    if (users === null) {
      return res.json({
        status: "fail",
        msg: "user tidak ditemukan",
      });
    }
    return res.json({
      status: "Success",
      msg: "user telah ditemukan",
      data: users,
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }
};

module.exports = { index, detail };
