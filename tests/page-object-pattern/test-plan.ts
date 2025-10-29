import { SideBar } from "./sidebar";
import { TestPlans } from "./test-plans";

export class TestPlan {
  constructor(private id: number, private revision: number) {}

  // Common functionality

  openSideBar() {
    return new SideBar();
  }

  lock() {
    // TODO implement
    return this;
  }

  unlock() {
    // TODO implement
    return this;
  }

  save() {
    // TODO implement
    return this;
  }

  release() {
    // TODO implement
    return this;
  }

  selectRevision(revisionNumber: string) {
    // TODO select Revision
    return this;
  }

  delete() {
    return new TestPlans();
  }

  // Assertions

  assertIsLocked() {
    // expect()
    return this;
  }

  // Specific for TestPlan

  addTestCase(testCaseId: number, revision: number) {
    // TODO add test case to test plan
    return this;
  }

  removeTestCase() {
    return this;
  }

  addAcronymAndDefinition() {
    return this;
  }

  addFundamentalDocument() {
    return this;
  }

  addReference() {
    return this;
  }

  addNewJiraAndERPLink() {
    return this;
  }

  addAllowedProductType() {
    return this;
  }

  exportTestCaseHTML() {
    // TODO check what happens here, because a new window opens. Where is the focus of playwright
  }
}
