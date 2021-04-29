const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const writeStream = fs.createWriteStream("produce.csv");

// Scrape all 12 pages of King Soopers produce items
for (let page = 1; page <= 12; page++) {
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
        writeStream.write(`${product}, ${weight}, ${picture} \n`);
      });

      console.log("Scraping done.");
    });
}
