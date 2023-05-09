import { test, expect } from '@playwright/test';

test('shows logged in users email', async ({ page }) => {
    const email = 'fred.flintstone@example.com'
    const password = '1Is0okhvskGn'

    await page.goto('/');
    await page.getByTestId('login').click()
    await page.getByLabel('Email address').fill(email)
    await page.getByLabel('Password').fill(password)
    await page.getByRole('button', { name: 'Continue', exact: true }).click()

    expect(await page.innerText('h2')).toContain(email)
});