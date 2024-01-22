const puppeteer = require("puppeteer");

let browserOPenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    // executablePath: "/path/to/chrome",
});
browserOPenPromise
    .then(function (browser) {
        console.log("browser is open");
    })
    