const ngo = require("../model/ngo");
const nodemailer = require("nodemailer");
//const { reset } = require("nodemon");
const jwt = require("jsonwebtoken");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});
exports.ngoCount = 0;

exports.register = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = Math.random().toString(36).slice(-8);
    const name = req.body.name;
    const ng = new ngo({
      email: email,
      password: password,
      name: name,
      ngoId: ngoCount++,
    });
    await ng.save();
    var mailOptions = {
      from: process.env.email,
      to: email,
      subject: "Credentials for Your Account!",
      text: `Email: ${email} and Password: ${password} (Keep it safe and don't share this with anyone!)`,
    };
    transporter
      .sendMail(mailOptions)
      .then(async (result) => {
        console.log(result);
        res.status(200).send({ message: "NGO register successfully!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).send({ message: error.message });
        return;
      });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

exports.loginNgo = async (req, res, next) => {
  try {
    let email = req.body.email.toLowerCase();
    let password = req.body.password.toLowerCase();
    let ngo = await ngo.findOne({
      $and: [{ email: email }, { password: password }],
    });
    if (!ngo) {
      res.status(400).send({ message: "ngo not found!" });
      return;
    }
    const token = jwt.sign({ ngoId: ngo.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({ token: token, ngoId: ngo.id });
    return;
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};
