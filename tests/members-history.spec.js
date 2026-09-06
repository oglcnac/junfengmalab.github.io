const { test, expect } = require('@playwright/test');

test('Shiyun is an alumna and Cindy has an intern destination', async ({ page }) => {
  await page.goto(process.env.MEMBERS_URL || 'https://junfengmalab.org/members/');

  const alumni = page.locator('[aria-labelledby="alumni-heading"]');
  const interns = page.locator('[aria-labelledby="previous-interns-heading"]');

  await expect(alumni.getByText('Shiyun Zhou', { exact: true })).toHaveCount(1);
  await expect(alumni.locator('li', { hasText: 'Shiyun Zhou' })).toContainText('Currently: Georgetown University');
  await expect(interns.getByText('Shiyun Zhou', { exact: true })).toHaveCount(0);

  await expect(interns.getByText('Shiwei (Cindy) Liang', { exact: true })).toHaveCount(1);
  await expect(interns.locator('li', { hasText: 'Shiwei (Cindy) Liang' })).toContainText('Georgetown University');
});
