import express from "express";
import config from "../../config";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Driver from "../../models/Driver";

/** example user for DB */
const users = [
  {
    _id: "Z120",
    firstName: "Cuneyt",
    lastName: "Askin",
    email: "cuneyt@peer.pr",
    password: "123456"
  }
];

const route = () => {
  const router = new express.Router();

  router.route("/login").post((req, res) => {
    const { email, password } = req.body;
    //const user = users.find(user => user.email === email);
    Driver.findOne({ email: email }).then(user => {
      if (!user) {
        //user=undefined
        res.send({
          status: false,
          message: "Böyle bir email adresi sistemde kayıtlı değil!"
        });
      } else {
        if (
          user.password ===
          crypto
            .createHmac("sha256", config.passSecret)
            .update(password)
            .digest("hex")
        ) {
          /** create token with key which is open or close token */
          const token = jwt.sign({ userId: user._id }, config.jwtSecret);
          Driver.update(
            { email: email },
            {
              $set: {
                lastLogin: new Date()
              }
            }
          ).then(() => {});
          res.send({
            status: true,
            token: token
          });
        } else {
          res.send({
            status: false,
            message: "Hatalı şifre girdiniz."
          });
        }
      }
    });
  });

  /** sign up */
  router.route("/sign-up").post((req, res) => {
    const { email, password } = req.body;

    const passwordHashed = crypto
      .createHmac("sha256", config.passSecret)
      .update(password)
      .digest("hex");

    const newDriver = new Driver({
      firstName: "Mehmet",
      lastName: "Aşkın",
      email: email,
      password: passwordHashed,
      phoneNumber: [
        {
          phoneType: "537",
          phoneNumber: "2120011"
        }
      ],
      plateNumber: "21ACD120",
      taxiStop: "Durmuş Taksi",
      taxiStopNumber: [
        {
          phoneType: "282",
          phoneNumber: "2120033"
        }
      ]
    });

    newDriver.validate((err, asd) => {
      console.log("err:", err);
      console.log("data:", asd);
    });

    newDriver.save().then(
      data => {
        console.log(data);
        res.send({ status: true, user: data });
      },
      err => {
        res.send({ status: false, error: err });
      }
    );
    //res.send(passwordHashed); //if we un comment, given error about not changed header
  });

  return router;
};

export default {
  route,
  routePrefix: `/${config.version}/auth`
};
