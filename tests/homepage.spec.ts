import { test, expect } from '@playwright/test';

test('has learn nextjs course link', async ({ page }) => {
  await page.goto('/');

  const learnNextjsLink = page.getByRole('link', {
    name: /Next.js Learn/i,
  });

  await expect(learnNextjsLink).toBeVisible();

  await learnNextjsLink.click();
  const nextjsLearningPageHeading = page.getByRole('heading', {
    name: /start building with next.js/i,
  });

  await expect(nextjsLearningPageHeading).toBeVisible();
});

test('has login link', async ({ page }) => {
  await page.goto('/');

  const loginLink = page.getByRole('link', { name: 'Log in' });
  await expect(loginLink).toBeVisible();
});
