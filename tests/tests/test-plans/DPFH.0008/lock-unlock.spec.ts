import { expect, test } from "@playwright/test";

const testName = "DPFH.0008 - Lock/Unlock";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// test(testName, async ({ page }) => {
//   // await page.
//   // await loginToMedicalPortal({ page });
//   // const homePage = new HomePage(page);
//   // await homePage.loginToPortal();
//   // await SideBar.navigateToTestPlans();
//   // await testPlans.createTestPlan(
//   //   `Auto Generated Test Plan #${Math.floor(Math.random() * 1000)}`
//   // );
//   // testPlan.lock;
//   // homePage
//   //   .loginToPortal()
//   //   .openSideBar()
//   //   .navigateToTestPlans()
//   //   .createTestPlan(
//   //     `Auto Generated Test Plan #${Math.floor(Math.random() * 1000)}`
//   //   )
//   //   // .assertIsLocked()
//   //   .unlock();
//   // .lock();
//   // .openSideBar()
//   // .navigateToTestCases()
//   // .openTestCaseFromList(0, 0)
//   // .openSectionDialog()
//   // .addElementAtEnd()
//   // .getElementAtIndex(0)
//   // .setElementDevice("General");
// });
