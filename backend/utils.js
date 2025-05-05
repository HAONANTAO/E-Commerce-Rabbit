// utils/errorHandler.js
const handleServerError = (res, error) => {
  console.error(error);
  res.status(500).json({ message: "Server Error" });
};
export { handleServerError };
