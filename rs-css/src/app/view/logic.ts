import LogicFabrics from "../util/logic-fabrics";
import { ILogicElements } from "../util/types";

export default abstract class Logic {
  elementCreator: LogicFabrics;

  constructor(params: ILogicElements) {
    this.elementCreator = this.createView(params);
  }

  getHtmlElement(): HTMLElement {
    return this.elementCreator.getElement();
  }

  createView(params: ILogicElements): LogicFabrics {
    const elementParams: ILogicElements = {
      tag: params.tag,
      classNames: params.classNames,
      childrens: params.childrens
    }
    const elementCreator = new LogicFabrics(elementParams);
    return elementCreator;
  }

}
