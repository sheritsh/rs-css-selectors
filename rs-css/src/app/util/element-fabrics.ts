import { IElement } from "./types";

export default class ElementFabrics {
  public element: HTMLElement;

  constructor(params: IElement) {
    this.element = document.createElement('div');
    this.createElement(params);
  }

  createElement(params: IElement) {
    this.element = document.createElement(params.tag);
    this.setStyles(params.classNames);
    this.setInnerHtml(params.innerHtml);
    this.setCallback(params.callback);
  }

  getElement(): HTMLElement {
    return this.element;
  }

  setStyles(styles: Array<string>) {
    // styles.forEach((className) => this.element?.classList.add(className));
    this.element.classList.add(...styles);
  }

  setInnerHtml(html: string) {
    if (this.element) {
      this.element.innerHTML = html;
    }
  }

  setCallback(callback: unknown) {
    this.element.addEventListener('click', () => callback);
  }
}