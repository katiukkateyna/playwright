import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Forms').click()
    await page.getByTestId('Form Layouts').click()
})

test('1st Test', async({page}) =>{
    // find by Tag
    page.locator('input')

    //find by ID
    page.locator('#inputEmail')

    //find by class value
    page.locator('.shape-rectangle')

    //find by attribute
    page.locator('[placeholder="Emai"]')

    //find by full class value
    page.locator('[class="label col-sm-3 col-form-label"]')

    //find by several selector
    page.locator('input[placeholder="Emai"].shape-rectangle')
    page.locator('input[placeholder="Emai"][nbinput]')

    //fnd by Xpath (NOT recommended)
    page.locator('//*[@id="inputEmail"]')

    //find by partial text match
    page.locator(':text("Using")')

    //find by exact text match
    page.locator(':text-is("Using the Grid")')
})