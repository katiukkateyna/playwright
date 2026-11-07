import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Reusing locators', async ({ page }) => {
    const basicForm = page.locator('nb-card', {hasText: 'Basic form'})
    const EmailFill = basicForm.getByLabel('Email')

    
    await EmailFill.fill('test@test.com')
    await basicForm.getByLabel('Password').fill('playwright')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

   await expect(EmailFill).toHaveValue('test@test.com')
})