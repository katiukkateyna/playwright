import { expect, test } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Modal & Overlays').click();
    await page.getByText('Dialog').click();
})


test('Auto-Waiting', async ({ page }) => {
    //test.setTimeout(12000)
    const dialogWithDelayForm = page.locator('nb-card', { hasText: 'Open Dialog With Delay' });
    await dialogWithDelayForm.getByRole('button', { name: '3 second' }).click();

    const dialogContainer = page.locator('nb-dialog-container');
    await dialogContainer.getByRole('button', { name: 'Ok' }).click({timeout:4000});

    const dialogHeader = await dialogContainer.locator('nb-card-header').textContent();
    //expect(dialogHeader).toEqual('Friendly reminder');
})