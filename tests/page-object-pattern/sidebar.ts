import { TestPlans } from "./test-plans";

export class SideBar {
  async closeSideBar() {
    return this;
  }

  async openSideBar() {
    return this;
  }

  async navigateToTestPlans() {
    // TODO click on test plans link
    return new TestPlans();
  }

  // navigateToTestCases() {
  //   // TODO click on test cases link
  //   return new TestCases();
  // }
}
