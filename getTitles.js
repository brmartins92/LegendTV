const puppeteer = require("puppeteer");

let getTitles = async movie => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`http://legendas.tv/`);
  await page.waitFor(1000);
  await page.click("#help-box-close");
  await page.waitFor(1000);
  await page.click(
    "body > div.container > header > section > div.login > a.js_entrar"
  );
  await page.waitFor(1000);
  await page.type(
    '#UserIndexForm > input[type="text"]:nth-child(3)',
    "brunoapp"
  );
  await page.type(
    '#UserIndexForm > input[type="password"]:nth-child(4)',
    "654321"
  );
  await page.click('#UserIndexForm > div.clearfix > input[type="submit"] ');

  await page.waitForNavigation();
  await page.waitFor(1000);
  await page.click("#likebox-close");
  await page.waitFor(1000);
  await page.type("#search-box", "The Simpsons");
  await page.click("#BuscaIndexForm > input.icon_zoom");
  await page.waitFor(1000);

  const result = await page.evaluate(() => {
    let data = [];
    let countSeason = document.querySelectorAll(
      "#slider-select-title > div > div > * "
    ).length;
    for (let i = 1; i <= countSeason; i++) {
      let title = document.querySelector(
        `#slider-select-title > div > div > div:nth-child(${i}) > a > span`
      ).innerText;
      let description = document.querySelector(
        `#slider-select-title > div > div > div:nth-child(${i}) > a > p`
      ).innerText;
      let id = document.querySelector(
        `#slider-select-title > div > div > div:nth-child(${i}) > a`
      ).attributes["data-filme"].value;

      data.push({
        title: title,
        description: description,
        id: `http://localhost:3000/season/${id}`
      });
    }

    return data;
  });

  browser.close();
  return result;
};

module.exports = getTitles;
