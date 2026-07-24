const authService = require("../services/authService")


const register = async (req, res) => {
  try {
    const result = await authService.register(req.body);

    return res.status(result.status).json(result);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);

    return res.status(result.status).json(result);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};