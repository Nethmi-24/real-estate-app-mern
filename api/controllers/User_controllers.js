
//Send a message(HelloTest) from server to browser.
export const test = (req, res) => {
  res.json({
    message: "Hello Test",
  });
};
