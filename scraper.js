const cheerio = require("cheerio");
const axios = require("axios");

axios
  .get(
    "https://www.kingsoopers.com/search?query=produce&searchType=previous_searches&fulfillment=all"
  )
  .then((res) => {
    const $ = cheerio.load(res.data);

    let produce = [];

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

      produce[index] = { product, weight, picture };
    });

    console.log(produce);
  });
