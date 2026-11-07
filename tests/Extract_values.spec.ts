import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

//test.describe ('Extracting values', async () => {
test('Extract text', async ({ page }) => {
    const basicForm = page.locator('nb-card', { hasText: 'Basic form' });
    const submitButtonText = await basicForm.getByRole('button').textContent();
    console.log(submitButtonText);

    expect(submitButtonText).toEqual('Submit');

})
test('Extract multiple test values', async ({ page }) => {
    const allCheckboxValues = await page.locator('nb-checkbox span').allTextContents();
    console.log(allCheckboxValues);
    //expect(allCheckboxValues).toContain('Remember me');
    expect(allCheckboxValues).toContain(['Remember me']);
})
//     // expect(page.locator('nb-radio span.text').first()).toContainText("asdasdasd");
//     // console.log(allRadioButtons);
// 

test('Extract input filed value', async ({ page }) => {
    const basicForm = page.locator('nb-card', { hasText: 'Basic form' });
    const emailFiled = await basicForm.getByRole('textbox', {name: 'Email'})

    await emailFiled.fill('test')

    const emailFiledValue = await emailFiled.inputValue()
    console.log(emailFiledValue)

})
test('Extract attributte value', async ({ page }) => {
    const basicForm = page.locator('nb-card', { hasText: 'Basic form' });
    const emailFiled = await basicForm.getByRole('textbox', {name: 'Email'})

    await emailFiled.fill('test')

    const emailPlaceholder = await emailFiled.getAttribute('placeholder')
    console.log(emailPlaceholder)

})
//})