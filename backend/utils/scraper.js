const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const writeStream = fs.createWriteStream("produce.csv");

// Scrape all 12 pages of King Soopers produce items
let allJSONdata = [];
let tempData = {};
const scrapeData = () => {
  for (let page = 1; page <= 12; page++) {
    console.log(`Scraping page: ${page}`);
    axios
      .get(
        `https://www.kingsoopers.com/search?fulfillment=all&page=${page}&query=produce&searchType=previous_searches`
      )
      .then((res) => {
        const $ = cheerio.load(res.data);

        $(".kds-Card").each((index, element) => {
          const product = $(element)
            .children(".flex-grow")
            .children(".kds-Link")
            .text();

          const weight = $(element)
            .children(".flex-grow")
            .children(".kds-Text--xs")
            .text();

          const picture = $(element)
            .children(".mb-4")
            .children("a")
            .children()
            .children()
            .attr("src");

          //Write Row to Csv
          // writeStream.write(`${product}, ${weight}, ${picture} \n`);

          tempData = {
            id,
            product,
            weight,
            picture,
          };

          allJSONdata.push(tempData);
        });

        saveData(allJSONdata);
      });
  }
};

const saveData = (data) => {
  fs.writeFile("produce.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
  });
};
