const { test, expect } = require('@playwright/test');

test('ambiguous Ma initials identify only Junfeng Ma as the lab author', async ({ page }) => {
  await page.goto(process.env.PUBLICATIONS_URL || 'https://junfengmalab.org/publications/');

  const ferroptosisAuthors = page.locator('#pmid-40681752 .publication-authors');
  await expect(ferroptosisAuthors.locator('strong')).toHaveCount(1);
  await expect(ferroptosisAuthors.locator('strong')).toHaveText('Ma J.');
  await expect(ferroptosisAuthors).toContainText('Zhang H.#, Ma J.#, Hou C.');
});

test('DOI-only review uses the verified author initials', async ({ page }) => {
  await page.goto(process.env.PUBLICATIONS_URL || 'https://junfengmalab.org/publications/');

  const review = page.locator('.publication-card', {
    has: page.getByRole('heading', { name: 'Immobilized Enzyme Reactors in Proteomics' }),
  });
  await expect(review.locator('.publication-authors')).toContainText('Ma J., Zhang L., Liang Z., Shan Y., Zhang Y.');
});
