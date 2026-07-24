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

const getAllPages = async (req, res) => {
  try {
    const result = await pageService.getAllPages();

    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPageById = async (req, res) => {
  try {
    const result = await pageService.getPageById(req.params.id);

    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updatePage = async (req, res) => {
  try {
    const result = await pageService.updatePage(req.params.id, req.body);

    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deletePage = async (req, res) => {
  try {
    const result = await pageService.deletePage(req.params.id);

    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPageBySlug = async (req, res) => {
  try {
    const result = await pageService.getPageBySlug(req.params.slug);

    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPublishedPages = async (req, res) => {
  try {
    const result = await pageService.getPublishedPages();

    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
  getPageBySlug,
  getPublishedPages
};