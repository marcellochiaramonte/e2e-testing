import { expect, test } from "@playwright/test";
import { Key, pressKeys } from "@utils/keypress";
import { loginToMedicalPortal } from "@utils/login";
import { navigateToAITProduction } from "@utils/navigation";
import { takeScreenshot } from "@utils/screenshot";

const screenshotLocation = "keyboard-shortcuts/f1-opens-dialog";

test("Opens and closes the Keyboard Shortcut dialog on ait prod", async ({
  page,
}) => {
  await loginToMedicalPortal({ page });

  await navigateToAITProduction(page, screenshotLocation);

  await pressKeys(page, [Key.F1]);

  const shortcutDialog = page.getByTestId("shortcut-dialog");

  await expect(shortcutDialog).toBeVisible();

  await takeScreenshot(page, `${screenshotLocation}/dialog-visible`);

  await pressKeys(page, [Key.F1]);

  await expect(shortcutDialog).not.toBeVisible();

  await takeScreenshot(page, `${screenshotLocation}/dialog-invisible`);
});
