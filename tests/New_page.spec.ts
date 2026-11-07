import { expect, test } from '@playwright/test';

test('open Chrome', async ({ page }) => {
    await page.goto('https://www.google.com/?hl=en-GB');
    await page.getByRole('button', {name: 'Accept all'}).click();
    // await page.getByRole('search').and(page.getByRole('combobox')).click();
    // await page.getByRole('search').getByRole('combobox').click();
     await page.getByRole('combobox',{name:'Search'}).fill('Test');
})


test.only('Maps', async ({page}) =>{
    await page.goto('https://www.google.com/maps/?hl=en-GB');
    await page.getByRole('button', {name: 'Accept all'}).click();
    const searchMapsField = page.locator('input[role="combobox"]');
    await searchMapsField.click();
    await searchMapsField.pressSequentially('Wroclaw', {delay: 200});
    await searchMapsField.clear();
    await searchMapsField.fill('Lodz');

    // assertions
    const expectedValue = "Łódź";
    const inputValue = await searchMapsField.inputValue();
    
    await expect(searchMapsField).toHaveValue(/Lodz/);
    await expect(searchMapsField).toHaveValue(inputValue);

    // selection from search results
     // selection by expected name
    // await page.getByRole('gridcell', { name: expectedValue, exact: true }).click();
      // selection first element fron dropdown
    await page.getByRole('gridcell').first().click();

    //check that input has changed value
    await expect(searchMapsField).toHaveValue(expectedValue);

})