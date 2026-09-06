const { test, expect } = require('@playwright/test');

test('publications page presents a compact header and article list', async ({ page }) => {
  await page.goto(process.env.PUBLICATIONS_URL || 'https://junfengmalab.org/publications/');

  const hero = page.locator('.publications-hero');
  await expect(hero).not.toContainText('Research Output');
  await expect(hero).not.toContainText('selected research articles');
  await expect(hero.getByText('Full publication record: >110 publications', { exact: true })).toBeVisible();
  await expect(hero.locator('p')).toHaveCount(0);
  await expect(hero.locator('.publication-actions a')).toHaveCount(2);

  const heroBox = await hero.boundingBox();
  const firstCardBox = await page.locator('.publication-card').first().boundingBox();
  expect(heroBox.height).toBeLessThanOrEqual(150);
  expect(firstCardBox.y).toBeLessThanOrEqual(410);
});
