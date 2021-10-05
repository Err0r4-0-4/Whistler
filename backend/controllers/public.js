const Public = require("../model/public");

exports.login = async (req, res, next) => {
  try {
    let public = await Public.findOne({ mobileNo: req.body.mobileNo });
    if (!public) {
      await new Public({ mobileNo: req.body.mobileNo }).save();
    }
    res.status(200).send({ message: "user added" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};
