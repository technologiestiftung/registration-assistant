import { test, expect } from "@playwright/test";

test("should translate page to english", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.getByRole("combobox").selectOption("English - EN");

  const englishHeading = page.getByRole("heading", {
    name: "Your RegiCheck",
  });

  await expect(englishHeading).toBeVisible();
});
