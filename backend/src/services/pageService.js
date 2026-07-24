const Page = require("../models/Page");

const createPage = async (pageData) => {

    if (!pageData.blocks || pageData.blocks.length === 0) {
    return {
      status: 400,
      success: false,
      message: "A page must contain at least one content block.",
    };
  }
  // Check if slug already exists
  const existingPage = await Page.findOne({ slug: pageData.slug });

  if (existingPage) {
    return {
      status: 409,
      success: false,
      message: "A page with this slug already exists.",
    };
  }

  // Create page
  const page = await Page.create(pageData);

  return {
    status: 201,
    success: true,
    message: "Page created successfully.",
    data: page,
  };
};

const getAllPages = async () => {
  const pages = await Page.find().sort({ createdAt: -1 });

  return {
    status: 200,
    success: true,
    data: pages,
  };
};

const getPageById = async (id) => {
  const page = await Page.findById(id);

  if (!page) {
    return {
      status: 404,
      success: false,
      message: "Page not found.",
    };
  }

  return {
    status: 200,
    success: true,
    data: page,
  };
};

const updatePage = async (id, pageData) => {
  // Check if page exists
  const existingPage = await Page.findById(id);

  if (!existingPage) {
    return {
      status: 404,
      success: false,
      message: "Page not found.",
    };
  }

  // Check if another page already uses the same slug
  if (pageData.slug) {
    const slugExists = await Page.findOne({
      slug: pageData.slug,
      _id: { $ne: id },
    });

    if (slugExists) {
      return {
        status: 409,
        success: false,
        message: "A page with this slug already exists.",
      };
    }
  }

  const updatedPage = await Page.findByIdAndUpdate(id, pageData, {
    new: true,
    runValidators: true,
  });

  return {
    status: 200,
    success: true,
    message: "Page updated successfully.",
    data: updatedPage,
  };
};

const deletePage = async (id) => {
  const page = await Page.findById(id);

  if (!page) {
    return {
      status: 404,
      success: false,
      message: "Page not found.",
    };
  }

  await Page.findByIdAndDelete(id);

  return {
    status: 200,
    success: true,
    message: "Page deleted successfully.",
  };
};

const getPageBySlug = async (slug) => {
  const page = await Page.findOne({
    slug,
    status: "published",
  });

  if (!page) {
    return {
      status: 404,
      success: false,
      message: "Page not found.",
    };
  }

  return {
    status: 200,
    success: true,
    data: page,
  };
};

const getPublishedPages = async () => {
  const pages = await Page.find({ status: "published" });

  return {
    status: 200,
    success: true,
    data: pages,
  };
};

module.exports = {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
  getPageBySlug,
  getPublishedPages,
};