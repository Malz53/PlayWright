const {test, expect} = require('@playwright/test');


test('assignment1', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    const cardTitles = page.locator(".card-body b");
    const userEmail = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const signInBtn = page.locator('#login');

    await userEmail.fill("mare@gmail.com");
    await password.fill("M@123456m");
    await signInBtn.click();
    await cardTitles.first().waitFor();
    //or you can use 
    //await page.waitForLoadState('networkidle');
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
})



