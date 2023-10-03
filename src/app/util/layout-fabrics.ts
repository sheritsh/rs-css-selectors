import { ILayoutElements } from "./types";

export default class LayoutFabrics {
  public element: HTMLElement;

  constructor(params: ILayoutElements) {
    this.element = document.createElement('div');
    this.createElement(params);
  }

  createElement(params: ILayoutElements) {
    this.element = document.createElement(params.tag);
    this.setStyles(params.classNames);
    this.setInnerHtml(params.innerHtml);
  }

  getElement(): HTMLElement {
    return this.element;
  }

  setStyles(styles: Array<string>) {
    this.element.classList.add(...styles);
  }

  setInnerHtml(html: string) {
    if (this.element) {
      this.element.innerHTML = html;
    }
  }

}