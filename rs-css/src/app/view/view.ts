import ElementFabrics from "../util/element-fabrics";
import { IViewParams } from "./types";

export default abstract class View {
  elementCreator: ElementFabrics;

  constructor(params: IViewParams) {
    this.elementCreator = this.createView(params);
  }

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  createView(params: IViewParams) {
    const elementParams: IViewParams = {
      tag: params.tag,
      classNames: params.classNames,
      innerHtml: params.innerHtml
    }
    const elementCreator = new ElementFabrics(elementParams);
    return elementCreator;
  }
}