import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("localhost:3000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Onelove/);
});

test("get started link", async ({ page }) => {
  await page.goto("localhost:3000");

  const header = await page.getByText("Welcome to Onelove!");
  const subHeader = await page.getByText(
    "Web 🛜 Mobile 📱 Desktop 🖥️ Browser Extensions 🔮 APIs 👮‍♂️ and Scraper 🕸️",
  );

  await expect(header).toBeVisible();
  await expect(subHeader).toBeVisible();
});
