import { Section } from "./section";
import { SideBar } from "./sidebar";

export class TestCase {
  constructor(private id: number, private revision: number) {}

  openSideBar() {
    return new SideBar();
  }

  // Common functionality

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

  // delete() {
  //   return new TestCases();
  // }

  // Specific for TestCase

  addSectionAtBeginning() {
    return this;
  }

  addSectionAtEnd() {
    return this;
  }

  importSectionsFromClipboard(sections: string) {
    return this;
  }

  openSectionDialog() {
    return new Section();
  }

  toggleSelectAll() {
    return this;
  }

  exportSelectedSections() {
    return this;
  }

  copySelectedSections() {
    return this;
  }

  deleteSelectedSections() {
    return this;
  }

  enableSelectedSections() {
    return this;
  }

  disableSelectedSections() {
    return this;
  }

  writeReferences() {
    return this;
  }

  writeTestRequirements() {
    return this;
  }

  writeTestProcedure() {
    return this;
  }

  addAuxiliaryMean() {
    return this;
  }

  exportAuxiliaryMeansToClipboard() {
    return this;
  }

  importAuxiliaryMeansFromClipboard() {
    return this;
  }

  exportTestCase() {
    // TODO
  }

  exportTestCaseHTML() {
    // TODO
  }
}
