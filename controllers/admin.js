const Admin = require("../model/admin");
const Factory = require("../model/factory");
const ngo = require("../model/ngo");

exports.loginAdmin = async (req, res, next) => {
  try {
    let username = req.body.username.toLowerCase();
    let password = req.body.password.toLowerCase();
    let admin = await Admin.findOne({
      $and: [{ username: username }, { password: password }],
    });
    if (!admin) {
      res.status(400).send({ message: "admin not found!" });
      return;
    }
    const token = jwt.sign({ adminId: admin.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({ token: token, adminId: admin.id });
    return;
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};

exports.assignNgo = async (req, res, next) => {
  try {
    let ngoCount = await (await Factory.find()).length;
    let ngoId;
    if (ngoCount === 1) {
      ngoId = 1;
    } else {
      ngoId = req.body.random % ngoCount;
    }
    console.log(ngoId);
    let n = await ngo.find({ ngoId: ngoId });
    console.log(n);
    await ngo.findOneAndUpdate(
      { ngoId: ngoId },
      {
        assignedFactoryId: req.body.factoryId,
        date: new Date(),
        dateOn: req.body.date,
        isAssigned: true,
      }
    );
    await Factory.findOneAndUpdate(
      { factoryId: req.body.factoryId },
      {
        isAssigned: true,
        date: new Date(),
        onDate: req.body.date,
        ngoName: n[0].name,
      }
    );
    res.status(200).send({ message: "ok Done!" });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};

exports.done = async (req, res, next) => {
  try {
    await ngo.findOneAndUpdate(
      { ngoId: req.body.nogId },
      { isAssigned: false }
    );
    res.status(200).send({ message: "ok Done!" });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};
