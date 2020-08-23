const { getHighScores } = require("./utils/airtable");

exports.handler = async (event) => {
  try {
    const records = await getHighScores(false);
    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Failed to query Airtable" }),
    };
  }
};
