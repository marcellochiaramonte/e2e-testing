import { Page } from "@playwright/test";
import { config } from "tests/config";
import { SideBar } from "./sidebar";

export class HomePage {
  constructor(private page: Page) {}

  async loginToPortal() {
    await this.page.goto(config.baseUrl);

    // await this.page.waitForNavigation({ waitUntil: "networkidle" });

    await this.page.getByLabel("username").fill(config.credentials.username);

    await this.page.getByLabel("password").fill(config.credentials.password);

    await this.page.getByRole("button").click();

    // await this.page.waitForNavigation({ waitUntil: "networkidle" });

    return this;
  }

  static async openSideBar() {
    return new SideBar();
  }

  toggleNavigationSideBar() {
    return this;
  }
}
