const {chromium} = require('playwright')

async function runtest() {
    const browser = await chromium.launch ({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click
    await page.pause();

    await browser.close();
}

runtest();