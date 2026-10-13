


import {test, expect} from '@playwright/test'

test('Login check', async ({page}) => {
    //navigate to url
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('#username').fill('student')
    await page.waitForTimeout(3000)
    await page.locator('#password').fill('Password123')
    await page.waitForTimeout(3000)
    await page.locator('#submit').click()
    await page.waitForTimeout(3000)


    

})
/* Async and await::::::
if any action is taking time to load on teh pge, teh playwright executor is not going to wait.
always tests fails

await - keyword used to wait for the promise tat it will receive from the async
async - declare the function that will return the prmose for every action on teh page
>> Async is at the function level and 
>> await will be at the line level

launching broweser (or every action on the page) will return three diff promises: 
1. Pending - the request that is shared is still in the pending state 
2. Resolved/ Fulfilled - the request that you snet is successfully complted and teh resposne is received
3. Rejected - the request is rejected completly , action failed to complte

in the first line beofere launching browser, async will wait for the page fixture and browser to be launcehd

*/