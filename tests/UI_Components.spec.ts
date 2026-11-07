import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
})

test.describe('Form Layouts page', () => {

    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    })

    test('Input filed', async ({ page }) => {
        const usingTheGridEmailInput = page.locator('nb-card', { hasText: 'Using the Grid' }).getByRole('textbox', { name: 'Email' });
        await usingTheGridEmailInput.fill('test');
        await usingTheGridEmailInput.clear();
        await usingTheGridEmailInput.pressSequentially('test2.com', { delay: 500 });//simulating the keystrokes 

        //extract the value
        const inputValue = await usingTheGridEmailInput.inputValue();//inputValue use if we want to extract value that fill

        //assertions
        await expect(usingTheGridEmailInput).toHaveValue('test2.com'); //toContent work with html value, that`s why here we use toHaveValue
        await expect(usingTheGridEmailInput).toHaveValue(/.com/);//partial match
    })
})