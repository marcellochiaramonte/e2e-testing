const screenshotPath = "./screenshots";

export const takeScreenshot = async (page: any, name: string) => {
  await page.screenshot({ path: `${screenshotPath}/${name}.png` });
};
