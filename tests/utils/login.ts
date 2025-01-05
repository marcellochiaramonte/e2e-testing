import { expect } from "@playwright/test";
import { config } from "../config";
import { takeScreenshot } from "./screenshot";
import { baseUrl } from "./test-setup";

export const loginToMedicalPortal = async ({
  page,
  screenshotFolder,
}: {
  page: any;
  screenshotFolder?: string;
}) => {
  await page.goto(baseUrl);

  await page.waitForNavigation({ waitUntil: "networkidle" });

  await page.getByLabel("username").fill(config.username);

  await page.getByLabel("password").fill(config.password);

  await page.getByRole("button").click();

  await page.waitForNavigation({ waitUntil: "networkidle" });

  await expect(page).toHaveURL(`${baseUrl}/pages/dashboard`);

  await page.getByText("Medical Portal");

  if (screenshotFolder) {
    await takeScreenshot(page, `${screenshotFolder}/login`);
  }
};
