import { expect } from "@playwright/test";
import { config } from "../config";

export const loginToMedicalPortal = async ({ page }: { page: any }) => {
  await page.goto(config.baseUrl);

  await page.waitForNavigation({ waitUntil: "networkidle" });

  await page.getByLabel("username").fill(config.credentials.username);

  await page.getByLabel("password").fill(config.credentials.password);

  await page.getByRole("button").click();

  await page.waitForNavigation({ waitUntil: "networkidle" });

  await expect(page).toHaveURL(`${config.baseUrl}/pages/dashboard`);

  await page.getByText("Medical Portal");
};
