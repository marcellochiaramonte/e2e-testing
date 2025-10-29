import { Section } from "./section";

export class Element {
  constructor(private elementIndex: number, private section: Section) {}

  toggleIsOnReport(isOnReport: boolean) {
    // TODO access the element by it's index
    return this.section;
  }

  toggleIsEnabled(isEnabled: boolean) {
    return this.section;
  }

  setElementDevice(device: string) {
    return this.section;
  }

  setElementType(type: string) {
    return this.section;
  }

  copyElement() {
    return this.section;
  }

  deleteElement() {
    return this.section;
  }

  setTargetSelection(targetDevices: Array<string>) {
    return this.section;
  }
}
