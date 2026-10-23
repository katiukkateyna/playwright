import { test } from '@playwright/test'
import { beforeEach } from 'node:test'

//test.beforeAll()
test.beforeEach(async ({ page }) => {
        await page.goto('https://playground.bondaracademy.com/')
})

test.describe('suite 1', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
    })

    test('this is a 1 test', async ({ page }) => {
        await page.getByText('Form Layouts').click()
    })

    test('this is a 2 test', async ({ page }) => {
        await page.getByText('Datepicker').click()
    })

})

test.describe('suite 2', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Charts', {exact: true}).click();
    })

    test.only('this is a 1 test', async ({ page }) => {
        await page.getByText('Form Layouts').click();
    })

    test('this is a 2 test', async ({ page }) => {
        await page.getByText('Datepicker').click();
    })

})


//test.afterEach()
