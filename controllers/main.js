const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  //check in controller
  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  const id = new Date().getDate();

  //jwt.sign(payload, secret) - secret is kept on server
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(201).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const { authorization: authHeader } = req.headers;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError(
      "Please log in before accessing secret message",
      401
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({ msg: `${decoded.username}`, secret: `Hello Mr. ${decoded.username} Your secret number: ${luckyNumber}` });

  } catch (error) {
    console.log("JWT TOKEN ERROR");
    throw new CustomAPIError("Invalid JWT Token", 401);
  }
};

module.exports = {
  login,
  dashboard,
};
