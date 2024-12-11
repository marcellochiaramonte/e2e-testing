import { expect, test } from "@playwright/test";
import { pwd, user } from "./pass";

const url = "http://localhost:4200";

const screenshotPath = "./screenshots";

test("has title", async ({ page }) => {
  await page.goto(url);

  await page.waitForNavigation({ waitUntil: "networkidle" });

  await page.getByLabel("username").fill(user);

  await page.getByLabel("password").fill(pwd);

  await page.getByRole("button").click();

  await page.waitForNavigation({ waitUntil: "networkidle" });

  await expect(page).toHaveURL("http://localhost:4200/pages/dashboard");

  await page.getByText("Medical Portal");

  await page.getByText("AIT Production").click();

  await expect(page).toHaveURL("http://localhost:4200/apps/ait-prod/load-form");

  await page.screenshot({ path: `${screenshotPath}/ait-prod.png` });

  await page.keyboard.press("F1");

  const shortcutDialog = page.getByTestId("shortcut-dialog");

  await expect(shortcutDialog).toBeVisible();

  await page.screenshot({ path: `${screenshotPath}/dialog-visible.png` });

  await page.keyboard.press("F1");

  await expect(shortcutDialog).not.toBeVisible();

  await page.screenshot({ path: `${screenshotPath}/dialog-invisible.png` });
});
