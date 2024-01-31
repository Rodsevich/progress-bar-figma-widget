export const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); // Adjust the range as needed
  return `${timestamp}-${random}`;
};
