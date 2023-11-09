export const generateRandomId = () => {
  const randomId = Math.floor(Math.random() * 1000000); // Adjust the range as needed
  return randomId.toString();
};
