const puppeteer = require("puppeteer");
const credentials = require("./credentials");

//Login Facebook

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setViewport({ height: 1080, width: 1920 });
  await page.goto("https://www.facebook.com/");
  await page.waitFor("#email");

  await page.type("[name=email]", credentials.email);
  await page.type("[name=pass]", credentials.password);

  await page.click("#loginbutton");

  await page.waitForNavigation();
  await page.screenshot({ path: "facebook.png" });

  await browser.close();
})();
