import { test, expect } from '@playwright/test'

test('should allow me to add todo items', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('h1')).toHaveText('Kids on Bikes Helper')
})
