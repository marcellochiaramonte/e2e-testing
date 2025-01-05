// clicks the button with data-testid unlock-test-plan-buttton

import test from "@playwright/test";
import { loginToMedicalPortal } from "@utils/login";
import {
  AITManagementPage,
  navigateToAITManagementPage,
} from "@utils/navigation";

test("Clicking the button with data-testid unlock-test-plan-button unlocks the Test Plan", async ({
  page,
}) => {
  await loginToMedicalPortal({ page });
  await navigateToAITManagementPage({
    page,
    aitManagementPage: AITManagementPage.TestPlans,
  });

  // create dummy test, navigate to test
  // check if test is released or not
  // check if user is able or not to lock / unlock test plan

  await page.click("[data-testid=unlock-test-plan-button]");
});
