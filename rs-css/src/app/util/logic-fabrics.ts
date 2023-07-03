import { ILogicElements } from "./types";

export default class LogicFabrics {
  public element: HTMLElement;

  constructor(params: ILogicElements) {
    this.element = document.createElement('div');
    this.createElement(params);
  }

  createElement(params: ILogicElements) {
    this.element = document.createElement(params.tag);
    this.setStyles(params.classNames);
    this.addChildrens(params.childrens);
  }

  getElement(): HTMLElement {
    return this.element;
  }

  setStyles(styles: Array<string>) {
    this.element.classList.add(...styles);
  }

  addChildrens(childElements: Array<HTMLElement> | null) {
    if (childElements)
      this.element.append(...childElements);
  }

}