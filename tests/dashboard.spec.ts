import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page).toHaveTitle(/acme dashboard/i);
});

test('sidebar has 3 links', async ({ page }) => {
  await page.goto('/dashboard');

  const dashboardHomeLink = page.getByRole('link', { name: 'Home' });
  const invoicesLink = page.getByRole('link', { name: 'Invoices' });
  const customersLink = page.getByRole('link', { name: 'Customers' });

  await expect(dashboardHomeLink).toBeVisible();
  await expect(invoicesLink).toBeVisible();
  await expect(customersLink).toBeVisible();
});

test('has dashboard cards', async ({ page }) => {
  await page.goto('/dashboard');

  const collectedCard = page.getByRole('heading', { name: /collected/i });
  const pendingCard = page.getByRole('heading', { name: /pending/i });
  const totalInvoicesCard = page.getByRole('heading', {
    name: /total invoices/i,
  });
  const totalCustomersCard = page.getByRole('heading', {
    name: /total customers/i,
  });

  await expect(collectedCard).toBeVisible();
  await expect(pendingCard).toBeVisible();
  await expect(totalInvoicesCard).toBeVisible();
  await expect(totalCustomersCard).toBeVisible();
});

test('has revenue chart', async ({ page }) => {
  await page.goto('/dashboard');

  const revenueChart = page.getByRole('heading', { name: /recent revenue/i });
  await expect(revenueChart).toBeVisible();
});

test('has latest invoices', async ({ page }) => {
  await page.goto('/dashboard');

  const latestInvoices = page.getByRole('heading', {
    name: /latest invoices/i,
  });
  await expect(latestInvoices).toBeVisible();
});
