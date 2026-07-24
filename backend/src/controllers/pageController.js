const pageService = require("../services/pageService");

const createPage = async (req, res) => {
  try {
    const result = await pageService.createPage(req.body);

    return res.status(result.status).json(result);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPage,
};