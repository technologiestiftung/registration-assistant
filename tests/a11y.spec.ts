import { expect, test } from "@playwright/test";

test("App should be usable with keyboard", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.keyboard.press("Tab"); // move focus to language select
  await page.keyboard.press("Tab"); // move focus to book appointment
  await page.keyboard.press("Tab"); // move focus to next button

  await page.keyboard.press("Enter"); // click next button

  const q1 = page.getByText("Meldest Du Dich zum ersten");

  await expect(q1).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const q2 = page.getByText("Bist Du verheiratet?");
  await expect(q2).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const q3 = page.getByText("Hast Du Kinder unter 18 Jahren?");
  await expect(q3).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const q4 = page.getByText("Hast Du die deutsche Staatsangehörigkeit?");
  await expect(q4).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const q5 = page.getByText("Kommst Du aus einem EU-Land?");
  await expect(q5).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const q6 = page.getByText("Bist Du unter 16 Jahre alt?");
  await expect(q6).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const q7 = page.getByText("Bist Du Geflüchtete:r?");
  await expect(q7).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const q8 = page.getByText("Bleibst Du in einer anderen Wohnung gemeldet?");
  await expect(q8).toBeVisible();

  await page.keyboard.press("Tab"); // move focus to info button
  await page.keyboard.press("Tab"); // move focus to radio buttons
  await page.keyboard.press("ArrowDown"); // chose no

  await page.keyboard.press("Enter"); // click next button

  const overview = page.getByRole("heading", {
    name: "Deine Dokumenten-Checkliste",
  });
  const registrationForm = page
    .locator("div")
    .filter({ hasText: /^Anmeldeformular$/ });
  const movingInConfirmation = page
    .locator("div")
    .filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
  const germanIdOrPassport = page
    .locator("div")
    .filter({ hasText: /^Reisepass oder Passersatzpapiere$/ });

  await expect(overview).toBeVisible();
  await expect(registrationForm).toBeVisible();
  await expect(movingInConfirmation).toBeVisible();
  await expect(germanIdOrPassport).toBeVisible();
});
