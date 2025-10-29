import { Element } from "./element";

export class Section {
  setTitle(title: string) {
    return this;
  }

  setSectionPreparation(text: string) {
    return this;
  }

  setSectionTitleType(titleType: string) {
    return this;
  }

  toggleFullTestOnly(isFullTestOnly: boolean) {
    return this;
  }

  toggleEnabled(isEnabled: boolean) {
    return this;
  }

  addElementAtBeginning() {
    return this;
  }

  addElementAtEnd() {
    return this;
  }

  getElementAtIndex(index: number) {
    return new Element(index, this);
  }
}
