import test, { expect } from "@playwright/test";
import { Key, pressKeys } from "@utils/keypress";
import { loginToMedicalPortal } from "@utils/login";
import {
  AITManagementPage,
  navigateToAITManagementPage,
} from "@utils/navigation";
import { takeScreenshot } from "@utils/screenshot";

const screenshotLocation = "keyboard-shortcuts/test-plans/add-new-test-plan";

test("Pressing Alt + N shows dialog to create new Test Plan", async ({
  page,
}) => {
  await loginToMedicalPortal({ page });

  await navigateToAITManagementPage({
    page,
    aitManagementPage: AITManagementPage.TestPlans,
  });

  takeScreenshot(page, screenshotLocation);

  await pressKeys(page, [Key.Alt, Key.N]);

  takeScreenshot(page, screenshotLocation);

  // Check if the dialog is visible and contains the text New Test Plan
  const newTestPlanDialog = page.getByTestId("create-test-plan-dialog");
  await expect(newTestPlanDialog).toBeVisible();
  await expect(newTestPlanDialog).toContainText("New Test Plan");

  takeScreenshot(page, screenshotLocation);
});
