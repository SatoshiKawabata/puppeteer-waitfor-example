const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:8080");
  let cnt = 0;
  while (cnt < 10) {
    const selector = ".notify-" + cnt;
    await page.waitForSelector(selector);
    console.log("notify", ".notify-" + cnt);
    cnt++;
  }
  await page.close();
  await browser.close();
})();
