import ElementFabrics from "../../util/element-fabrics";
import { IElement } from "../../util/types";

export default class MainView {
  elementCreator: ElementFabrics;

  constructor() {
    this.elementCreator = this.createView();
  }

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  createView() {
    const params: IElement = {
      tag: 'main',
      classNames: ['main'],
      innerHtml: '',
      callback: null
    }
    const elementCreator = new ElementFabrics(params);
    return elementCreator;
  }
}