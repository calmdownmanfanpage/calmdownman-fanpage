const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    const response = await axios.get(
      "https://namu.wiki/w/%EA%B6%A4%EB%8F%84(%EC%9D%B8%EB%AC%BC)"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

getHtml().then((html) => {
  let ulList = [];
  const $ = cheerio.load(html);
  const $bodyList = $("table._a85d3315433906212b26b279934fc095 tbody").find(
    "tbody"
  );

  $bodyList.each(function (i, elem) {
    ulList[i] = {
      nickname: $(this).find("tr:nth-child(1) strong").text(),
      image_url: $(this).find("tr:nth-child(2) img.GJItanm2").attr("src"),
      name: $(this).find("tr:nth-child(3) div.hQuAzr23").text(),
      age: $(this).find("tr:nth-child(4) a").text(),
      job: $(this).find("tr:nth-child(7) a._6GyLTc6K").text(),
      ment: $(this).find("a._6GyLTc6K").text(),
    };
  });

  const data = ulList.filter((n) => n.name);
  console.log(data);
});
