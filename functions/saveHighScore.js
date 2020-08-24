const { table, getHighScores } = require("./utils/airtable");
const { getTokenFromHeader, validateToken } = require("./utils/auth");
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "The http method is not allowed" }),
    };
  }

  const token = getTokenFromHeader(event.headers);
  const user = await validateToken(token);

  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ err: "The user is not authorized " }),
    };
  }
  try {
    const records = await getHighScores(true);
    const name = user["https://learnpracticetype/username"];
    const { score } = JSON.parse(event.body);
    console.log(typeof score);
    if (!name || typeof score === "undefined") {
      return {
        statusCode: 400,
        body: JSON.stringify({ err: "Bad Request" }),
      };
    }
    const leasetScore = records[9];

    if (
      leasetScore.fields.score === undefined ||
      score > leasetScore.fields.score
    ) {
      const updateRecord = {
        id: leasetScore.id,
        fields: { name, score },
      };

      await table.update([updateRecord]);
      return {
        statusCode: 200,
        body: JSON.stringify(updateRecord),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Failed to save score to  Airtable" }),
    };
  }
};
