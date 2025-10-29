import { SideBar } from "./sidebar";
import { TestPlan } from "./test-plan";

export class TestPlans {
  openSideBar() {
    return new SideBar();
  }

  async createTestPlan(title: string) {
    // TODO creates new test plan, get the id and rev number
    const id = 1234;
    const revision = 0;

    return new TestPlan(id, revision);
  }

  openTestPlanFromList(id: number, revision: number) {
    return new TestPlan(id, revision);
  }
}
