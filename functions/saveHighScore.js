const Airtable = require("airtable");
require("dotenv").config();
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base(process.env.AIRTABLE_TABLE);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "The http method is not allowed" }),
    };
  }
  try {
    const records = await table
      .select({
        sort: [{ field: "score", direction: "desc" }],
      })
      .firstPage();
    const formatRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));
    const { name, score } = JSON.parse(event.body);

    if (!name || !score) {
      return {
        statusCode: 400,
        body: JSON.stringify({ err: "Bad Request" }),
      };
    }

    if (
      formatRecords[9].fields.score === undefined ||
      score > formatRecords[9].fields.score
    ) {
      const updateRecord = {
        id: formatRecords[9].id,
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
