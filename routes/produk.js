const express = require("express");
const { postProduct, getProduct, getnamaProduct, getidProduct, delproduct, upproduk, validationMiddleware, productValidator,  } = require("../controller/produkCon");
const produkrouter = express.Router();


produkrouter.post('/post',postProduct)
produkrouter.get('/get',getProduct)
produkrouter.get("/getcode/:id",getidProduct)
produkrouter.get("/getnama/:namaproduk",getnamaProduct)
produkrouter.delete("/dell/:id", delproduct)
produkrouter.put("/upproduk/:id", upproduk)

module.exports = {produkrouter}