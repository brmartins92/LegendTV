const puppeteer = require("puppeteer");

let getLegend = async movie => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto(
    `http://legendas.tv/`
  );
  await page.waitFor(1000);
  await page.click("#help-box-close");
  await page.waitFor(1000);
  await page.click("body > div.container > header > section > div.login > a.js_entrar");
  await page.waitFor(1000);
  await page.type('#UserIndexForm > input[type="text"]:nth-child(3)','brunoapp');
  await page.type('#UserIndexForm > input[type="password"]:nth-child(4)','654321');
  await page.click('#UserIndexForm > div.clearfix > input[type="submit"] ');
  
  await page.waitForNavigation();
  await page.waitFor(1000);
  await page.click("#likebox-close");
  await page.waitFor(1000);
  await page.type('#search-box','os simpsons');
  await page.click("#BuscaIndexForm > input.icon_zoom");
  await page.waitFor(1000);
  const result = await page.evaluate(() => {
    /*
    let data = [];
    let countPlayer = document.querySelectorAll(
      "#worlds > div.Border_2 > div > div > div:nth-child(5) > table > tbody > tr > td > div > table > tbody > tr"
    ).length;

    for (var i = 2; i < countPlayer; i++) {
      let name = document.querySelector(
        `#worlds > div.Border_2 > div > div > div:nth-child(5) > table > tbody > tr > td > div > table > tbody > tr:nth-child(${i}) > td:nth-child(1)`
      ).innerText;
      let level = document.querySelector(
        `#worlds > div.Border_2 > div > div > div:nth-child(5) > table > tbody > tr > td > div > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`
      ).innerText;
      let vocation = document.querySelector(
        `#worlds > div.Border_2 > div > div > div:nth-child(5) > table > tbody > tr > td > div > table > tbody > tr:nth-child(${i}) > td:nth-child(3)`
      ).innerText;
      data.push({
        name: name,
        level: level,
        vocation: vocation
      });
    }

    return data;
    */
    return false;
  });

  //browser.close();
  //return result;
};

module.exports = getLegend;
