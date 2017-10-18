import * as puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate({ viewport: { width: 1440, height: 900 }, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36" });

    for (const type of ["vue", "react", "angular"]) {
        await page.goto(`http://localhost:8000/demo/${type}`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-initial.png`, fullPage: true });

        // default mode
        await page.click(`.default-mode .page-2`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-2.png`, fullPage: true });

        await page.click(`.default-mode .page-3`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-3.png`, fullPage: true });

        await page.click(`.default-mode .page-4`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-4.png`, fullPage: true });

        await page.click(`.default-mode .page-5`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-5.png`, fullPage: true });

        await page.click(`.default-mode .page-6`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-6.png`, fullPage: true });

        await page.click(`.default-mode .next-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-next.png`, fullPage: true });

        await page.click(`.default-mode .last-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-tail.png`, fullPage: true });

        await page.click(`.default-mode .first-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-head.png`, fullPage: true });

        await page.click(`.default-mode .next-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-next-2.png`, fullPage: true });

        await page.click(`.default-mode .previous-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-click-previous.png`, fullPage: true });

        // mode 1
        await page.click(`.mode-1 .page-2`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-2.png`, fullPage: true });

        await page.click(`.mode-1 .page-3`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-3.png`, fullPage: true });

        await page.click(`.mode-1 .page-4`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-4.png`, fullPage: true });

        await page.click(`.mode-1 .page-5`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-5.png`, fullPage: true });

        await page.click(`.mode-1 .next-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-next.png`, fullPage: true });

        await page.click(`.mode-1 .last-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-tail.png`, fullPage: true });

        await page.click(`.mode-1 .first-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-head.png`, fullPage: true });

        await page.click(`.mode-1 .next-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-next-2.png`, fullPage: true });

        await page.click(`.mode-1 .previous-page`);
        await page.waitFor(100);
        await page.screenshot({ path: `screenshots/${type}-mode-1-click-previous.png`, fullPage: true });
    }

    browser.close();
})();
