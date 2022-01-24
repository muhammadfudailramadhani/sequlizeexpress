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

    const users = await UserModel.findByPk(id);
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

const detailByEmail = async (req, res) => {
  const email = req.params.email;
  const users = await UserModel.findOne({
    where: {
      email: email,
    },
  });
  // const { email } = req.params;
  try {
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

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserModel.destroy({
      where: {
        id: id,
      },
    });
    if (users === 0) {
      return res.json({
        status: "fail",
        msg: "user tidak ditemukan",
      });
    }
    return res.json({
      status: "Success",
      msg: "user berhasil di hapus",
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

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const users = await UserModel.findByPk(id);
    if (users === 0) {
      return res.json({
        status: "fail",
        msg: "user tidak ditemukan",
      });
    }

    await UserModel.update(
      {
        name: name,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      status: "Success",
      msg: "user berhasil di update",
    });
  } catch (err) {
    return res.status(403).json({
      status: "fail",

      msg: "ada kesalahan",
    });
  }
};
module.exports = { index, detail, detailByEmail, destroy, update };
