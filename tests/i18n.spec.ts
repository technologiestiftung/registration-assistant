import { test, expect } from "@playwright/test";

test("should translate page to english", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByRole("combobox").selectOption("English");

  const englishHeading = page.getByRole("heading", {
    name: "Your Registration Assistant",
  });

  await expect(englishHeading).toBeVisible();
});
