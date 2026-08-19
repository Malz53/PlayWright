const {test, expect} = require('@playwright/test');


test.only('Browser Context Playwright Test', async ({browser})=>{
 const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css, xpath, fill can be used to locate elements
    await page.locator('#username').fill("Malz");
    await page.locator("[type='password']").fill("123456");
    await page.locator('#signInBtn').click();
    //wait until this locator shows up in DOM
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
})

test('first playwright test', async ({page})=>{
    
    await page.goto("https://google.com");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})