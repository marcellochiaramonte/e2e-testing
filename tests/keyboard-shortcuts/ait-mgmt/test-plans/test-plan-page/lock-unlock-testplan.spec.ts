import test, { expect } from "@playwright/test";
import { Key, pressKeys } from "@utils/keypress";
import { loginToMedicalPortal } from "@utils/login";
import {
  AITManagementPage,
  navigateToAITManagementPage,
} from "@utils/navigation";
import { takeScreenshot } from "@utils/screenshot";
import { randomInt } from "crypto";
import { config } from "tests/config";

test("Pressing F9 unlocks the Test Plan", async ({ page }) => {
  const testplanName = "testplan-" + randomInt(1, 100000).toString();

  await loginToMedicalPortal({ page });
  await navigateToAITManagementPage({
    page,
    aitManagementPage: AITManagementPage.TestPlans,
  });

  // Creates new test plan
  await pressKeys(page, [Key.Alt, Key.N]);

  await page.getByTestId("create-testplan-text-input").fill(testplanName);

  await pressKeys(page, [Key.Enter]);

  await page.waitForURL(
    config.baseUrl + "/apps/ait-mgmt/testPlans/*/revisions/*"
  );

  await expect(page.getByTestId("testplan-header-title")).toHaveText(
    testplanName
  );

  // New test plan is locked by default

  expect(page.getByTestId("locked-icon")).toBeVisible();

  await takeScreenshot(page, "ait-mgmt-test-plan-locked-pristine");

  // Unlocks the test plan by pressing F9

  await pressKeys(page, [Key.F9]);

  await page.waitForSelector('[data-testid="unlocked-icon"]', {
    state: "visible",
  });

  await takeScreenshot(page, "ait-mgmt-test-plan-unlocked");

  // Locks the test plan by pressing F9

  await pressKeys(page, [Key.F9]); // locks the test plan

  await page.waitForSelector('[data-testid="locked-icon"]', {
    state: "visible",
  });

  await takeScreenshot(page, "ait-mgmt-test-plan-locked");
});
