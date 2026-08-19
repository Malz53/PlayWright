const {test, expect} = require('@playwright/test');


test('Browser Context Playwright Test', async ({browser})=>{
    

    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const signInBtn = page.locator('#signInBtn');
    const password = page.locator("[type='password']");
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //css, xpath, fill can be used to locate elements
    await userName.fill("Malz");
    await password.fill("Learn833mK2)");
    await signInBtn.click();
    //wait until this locator shows up in DOM
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await password.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2"); 
    await signInBtn.click();
    //console.log(await page.locator(".card-body a").first().textContent());
    //console.log(await cardTitles.nth(0).textContent());
    //allTextContent is not subject to auto-wait
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

})



test('first playwright test', async ({page})=>{
    
    await page.goto("https://google.com");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})