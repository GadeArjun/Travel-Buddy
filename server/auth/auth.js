const jwt = require("jsonwebtoken");
const { User } = require("../model/users");

exports.userAuthentication = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    console.log({ token });
    if (token) {
      const isVerify = jwt.verify(token, "secret_key");
      console.log({ isVerify });

      if (isVerify) {
        const user = await User.findOne({ user_email: isVerify }).select(
          "-user_password"
        );
        console.log({ user });

        if (user) {
          res.status(200).json(user);
          next();
        } else {
          res.status(404).json("not found");
        }
      }
    } else {
      res.status(404).json("not found");
    }
  } catch (err) {
    res.status(500).json("Server Error");
    console.log(err);
  }
};
