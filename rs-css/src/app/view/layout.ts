import LayoutFabrics from "../util/layout-fabrics";
import { ILayoutElements } from "../util/types";

export default abstract class Layout {
  elementCreator: LayoutFabrics;

  constructor(params: ILayoutElements) {
    this.elementCreator = this.createView(params);
  }

  getHtmlElement(): HTMLElement {
    return this.elementCreator.getElement();
  }

  createView(params: ILayoutElements): LayoutFabrics {
    const elementParams: ILayoutElements = {
      tag: params.tag,
      classNames: params.classNames,
      innerHtml: params.innerHtml
    }
    const elementCreator = new LayoutFabrics(elementParams);
    return elementCreator;
  }

}