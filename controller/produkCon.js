const Produkmodel = require("../models").produk;

const postProduct = async (req, res) => {
  try {
    let body = req.body;
    const add = await Produkmodel.create(body);
    res.status(201).json({
      status: "berhasil",
      data: body,
    });
  } catch (er) {
    console.log(er);
    res.status(422).json({
      status: "gagal",
    });
  }
};



const getProduct = async (req, res) => {
  try {
    
    const get = await Produkmodel.findAll();
    console.log(get);

    return res.json({
      status: "Success",
      msg: "daftar produk telah di temukan",
      data: get,
    });
  } catch (er) {
    console.log(er);
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }
};

const getidProduct = async (req, res) => {
    try {
        const { id } = req.params;
    
        const numberid = await Produkmodel.findByPk(id);
        if (numberid === null) {
          return res.json({
            status: "fail",
            msg: "user tidak ditemukan",
          });
        }
        return res.json({
          status: "Success",
          msg: "user telah ditemukan",
          data: numberid,
        });
      } catch (err) {
        console.log(err);
        return res.status(403).json({
          status: "fail",
          msg: "ada kesalahan",
        });
      }
  };
  const getnamaProduct = async (req, res) => {
    const namaproduk = req.params.namaproduk;
    const nama = await Produkmodel.findOne({
      where: {
        namaproduk: namaproduk,
      },
    });
    // const { email } = req.params;
    try {
      if (nama === null) {
        return res.json({
          status: "fail",
          msg: "namaproduk tidak ditemukan",
        });
      }
      return res.json({
        status: "Success",
        msg: "namaproduk telah ditemukan",
        data: nama,
      });
    } catch (err) {
      console.log(err);
      return res.status(403).json({
        status: "fail",
        msg: "ada kesalahan",
      });
    }
  };

  const delproduct = async (req, res) => {
    try {
      const { id } = req.params;
      const dell = await Produkmodel.destroy({
        where: {
          id: id,
        },
      });
      if (dell === 0) {
        return res.json({
          status: "fail",
          msg: "id tidak ditemukan",
        });
      }
      return res.json({
        status: "Success",
        msg: "id berhasil di hapus",
        data: dell,
      });
    } catch (err) {
      console.log(err);
      return res.status(403).json({
        status: "fail",
        msg: "ada kesalahan",
      });
    }
  };

  const upproduk = async (req, res) => {
    try {
      const { id } = req.params;
      const { namaproduk1 } = req.body;
      const namaproduk = await Produkmodel.findByPk(id);
      if (namaproduk === 0) {
        return res.json({
          status: "fail",
          msg: "user tidak ditemukan",
        });
      }
  
      await Produkmodel.update(
        {
          name: namaproduk1,
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


module.exports = { postProduct, getProduct, getidProduct, getnamaProduct, delproduct, upproduk };
