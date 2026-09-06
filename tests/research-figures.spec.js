const { test, expect } = require('@playwright/test');

test('research figures use responsive cards without distorting images', async ({ page }) => {
  await page.goto(process.env.RESEARCH_URL || 'https://junfengmalab.org/research/');

  const cards = page.locator('.research-figure-card');
  await expect(cards).toHaveCount(3);
  await expect(page.locator('.research-figure-card--featured')).toHaveCount(1);
  await expect(page.getByText('Chemical Reviews 2022', { exact: false })).toBeVisible();

  for (const image of await page.locator('.research-figure-card img').all()) {
    const dimensions = await image.evaluate((img) => ({
      naturalRatio: img.naturalWidth / img.naturalHeight,
      renderedRatio: img.getBoundingClientRect().width / img.getBoundingClientRect().height,
      renderedHeight: img.getBoundingClientRect().height,
    }));

    expect(Math.abs(dimensions.naturalRatio - dimensions.renderedRatio)).toBeLessThan(0.02);
    expect(dimensions.renderedHeight).toBeLessThanOrEqual(430);
  }
});
