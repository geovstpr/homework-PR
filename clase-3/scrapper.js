const {chromium} = require('playwright')

async function runtest() {
    const browser = await chromium.launch ({headless: false});
    const page = await browser.newPage();

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.click('button.btn.btn')
    await page.pause();

    await browser.close();
}

runtest();