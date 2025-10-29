import { Page } from "@playwright/test";
import { TestCase } from "./test-case";

export class TestCases {
  constructor(private page: Page) {}

  async navigateToTestCasesList() {}

  createTestCase(title: string) {
    // TODO creates new test case, get the id and rev number
    const id = 1234;
    const revision = 0;

    return new TestCase(id, revision);
  }

  importTestCase() {
    // TODO import test case from json file

    const id = 1234;
    const revision = 0;

    return new TestCase(id, revision);
  }

  openTestCaseFromList(id: number, revision: number) {
    // TODO use filter, check that only one test exists, click on it

    return new TestCase(id, revision);
  }

  filterTestCases(input: TestCasesFilterInput) {
    // TODO fill the filter input fields

    return this;
  }
}

export interface TestCasesFilterInput {
  id?: string;
  title?: string;
  toolNumber?: string;
  creator?: string;
  lockedBy?: string;
  released?: boolean;
  automatic?: boolean;
  state: "Enabled" | "Hidden";
  workstationSetup?: string;
}
