// getProjectLink.js
const getProjectLink = (title) => {
  switch (title) {
    case "E-Commerce Website":
      return "https://example.com/ecommerce";
    case "Portfolio Website":
      return "https://github.com/dakshu04/React-portfolio";
    case "Task Management App":
      return "https://example.com/taskmanagement";
    case "Blogging Platform":
      return "https://example.com/bloggingplatform";
    default:
      return "#"; // Default link if title doesn't match any case
  }
};

export default getProjectLink;
