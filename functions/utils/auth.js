const jwks = require("jwks-rsa");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const client = jwks({
  jwksUri: process.env.AUTH0_DOMAIN,
});

const getTokenFromHeader = (header) => {
  if (!header.authorization) {
    return null;
  }
  const authParts = header.authorization.split(" ");
  if (authParts[0] !== "Bearer" || authParts.length !== 2) {
    return null;
  }
  return authParts[1];
};

let signingKey;
const validateToken = async (token) => {
  if (!signingKey) {
    const getSigningKey = promisify(client.getSigningKey);
    try {
      const key = await getSigningKey(process.env.AUTH0_KEY_ID);
      signingKey = key.getPublicKey();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  try {
    const decode = jwt.verify(token, signingKey);
    return decode;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  getTokenFromHeader,
  validateToken,
};
