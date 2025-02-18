import { test } from "@playwright/test";
import { loginToMedicalPortal } from "@utils/login";
import { navigateToAITManagementPage, portalPages } from "@utils/navigation";

const testName = "3.10.1 Check functionality of filters";

test(testName, async ({ page }) => {
  await loginToMedicalPortal({ page });

  await navigateToAITManagementPage({
    page,
    aitManagementPage: portalPages.AIT_Management.Products,
    screenshotFolder: testName,
  });

  // create a test that checks the filters of the page against the table
});
