import { expect,test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})


test('Assertions', async ({ page }) => {
    //generic assertions
    const value = 5;
    expect(value).toEqual(5);


    const basicFormButton = page.locator('nb-card', { hasText: 'Basic form' }).getByRole('button');
    const submitButtonText = await basicFormButton.textContent();
    //console.log(submitButtonText);
    expect(submitButtonText).toEqual('Submit');

    //locator assertion
   await expect(basicFormButton).toHaveText('Submit');

   //soft assertion
   await expect.soft(basicFormButton).toHaveText('Submittt',{timeout: 8000});
   await basicFormButton.click();
})
