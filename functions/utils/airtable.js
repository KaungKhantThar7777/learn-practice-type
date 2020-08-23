const Airtable = require("airtable");
require("dotenv").config();
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base(process.env.AIRTABLE_TABLE);

const getHighScores = async (toFilter) => {
  const option = {
    sort: [{ field: "score", direction: "desc" }],
  };
  if (toFilter) {
    option.filterByFormula = `AND(name != '', score > 0)`;
  }
  const records = await table.select(option).firstPage();
  const formatRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));

  return formatRecords;
};

module.exports = {
  table,
  getHighScores,
};
