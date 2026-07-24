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

module.exports = {
  createPage,
};