import { expect } from "@playwright/test";
import { config } from "tests/config";
import { takeScreenshot } from "./screenshot";

export const AITManagementPage = {
  // Dashboard: {
  //   name: "Dashboard", // use uid for testing -> clashes with other dashboard text in the screen
  //   url: "/apps/ait-mgmt/dashboard",
  // },

  TestPlans: {
    name: "Test Plans",
    url: "/apps/ait-mgmt/testPlans",
  },
};

export const portalPages = {
  AIT_Management: {
    TestPlans: {
      name: "Test Plans",
      url: "/apps/ait-mgmt/testPlans",
    },
    Products: {
      name: "Products",
      url: "/apps/ait-mgmt/products",
    },
  },
};

export const navigateToAITProduction = async (page: any, testName: string) => {
  await page.getByText("AIT Production").click();

  await expect(page).toHaveURL(config.baseUrl + "/apps/ait-prod/load-form");

  await takeScreenshot(page, `${testName}/ait-prod-home`);
};

export const navigateToAITManagementPage = async ({
  page,
  aitManagementPage,
  screenshotFolder,
}: {
  page: any;
  aitManagementPage: { name: string; url: string };
  screenshotFolder?: string;
}) => {
  const { name: pageName, url: pageUrl } = aitManagementPage;

  await page.getByText("AIT Management").click(); // TODO use testid

  await page.getByText(pageName).click();

  await expect(page).toHaveURL(config.baseUrl + pageUrl);

  if (screenshotFolder) {
    await takeScreenshot(
      page,
      `${screenshotFolder}/ait-mgmt-${pageName}`.toLowerCase()
    );
  }
};
