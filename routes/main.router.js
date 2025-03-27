

const express = require("express");
const useRouter = require("./user.router");

const mainRouter = express.Router();

mainRouter.use(useRouter);

mainRouter.get( "/" ,(req, res) => {
    res.send("ٱلسَّلَامُ عَلَيْكُمْ محمد إرشاد");
})

module.exports = mainRouter;
















