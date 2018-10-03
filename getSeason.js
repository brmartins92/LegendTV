const puppeteer = require("puppeteer");

let getSeason = async season => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`http://legendas.tv/busca/The%20Simpsons/${season}`);

  const result = await page.evaluate(async() => {
    let data = [];
    //let btnCarregarMais = document.querySelector("#resultado_busca > a");

    while (btnCarregarMais = document.querySelector("#resultado_busca > a")) {
      btnCarregarMais.click();
      //btnCarregarMais = ""; 
      //btnCarregarMais = document.querySelector("#resultado_busca > a");

    }

    Array.from(document.querySelectorAll(".gallery > article > div")).map(div =>
      data.push({
        name: div.childNodes[1].childNodes[0].innerText,
        description: div.childNodes[1].childNodes[1].innerText,
        language: div.childNodes[2].attributes.title.value,
        download: `http://legendas.tv/downloadarquivo/${
          div.childNodes[1].childNodes[0].childNodes[0].attributes.href.value.split(
            "/"
          )[2]
        }`
      })
    );

    return data;
  });

  browser.close();
  return result;
};

module.exports = getSeason;
