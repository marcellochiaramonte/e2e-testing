import { expect, test } from "@playwright/test";
import { Key, pressKeys } from "../shared/keypress";
import { loginToMedicalPortal } from "../shared/login";
import {
  AITManagementPage,
  navigateToAITManagementPage,
  navigateToAITProduction,
} from "../shared/navigation";
import { takeScreenshot } from "../shared/screenshot";

const screenshotLocation = "keyboard-shortcuts/f1-opens-dialog";

test("Opens and closes the Keyboard Shortcut dialog on ait prod", async ({
  page,
}) => {
  await loginToMedicalPortal(page, screenshotLocation);

  await navigateToAITProduction(page, screenshotLocation);

  await pressKeys(page, [Key.F1]);

  const shortcutDialog = page.getByTestId("shortcut-dialog");

  await expect(shortcutDialog).toBeVisible();

  await takeScreenshot(page, `${screenshotLocation}/dialog-visible`);

  await pressKeys(page, [Key.F1]);

  await expect(shortcutDialog).not.toBeVisible();

  await takeScreenshot(page, `${screenshotLocation}/dialog-invisible`);
});

test("Opens and closes the Keyboard Shortcut dialog on ait-mgmt", async ({
  page,
}) => {
  await loginToMedicalPortal(page, screenshotLocation);

  await navigateToAITManagementPage(
    page,
    AITManagementPage.TestPlans,
    screenshotLocation
  );

  await pressKeys(page, [Key.F1]);

  const shortcutDialog = page.getByTestId("shortcut-dialog");

  await expect(shortcutDialog).toBeVisible();

  await takeScreenshot(page, `${screenshotLocation}/dialog-visible`);

  await pressKeys(page, [Key.F1]);

  await expect(shortcutDialog).not.toBeVisible();

  await takeScreenshot(page, `${screenshotLocation}/dialog-invisible`);
});
