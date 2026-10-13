import {test, expect} from '@playwright/test'

test ('radio button' , async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    const radibtn = page.getByText('Female')
    await page.waitForTimeout(2000)
    await radibtn.scrollIntoViewIfNeeded()
     await page.waitForTimeout(2000)
     await radibtn.click()
     await page.waitForTimeout(2000)



})