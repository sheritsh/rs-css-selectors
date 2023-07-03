// MAINWINDOW TO ALL LOGIC
import LayoutFabrics from "../../util/layout-fabrics";
import { ILayoutElements } from "../../util/types";

export default class MainView {
  elementCreator: LayoutFabrics;

  constructor() {
    this.elementCreator = this.createView();
  }

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  createView() {
    const params: ILayoutElements = {
      tag: 'main',
      classNames: ['main'],
      innerHtml: ''
    }
    const elementCreator = new LayoutFabrics(params);
    return elementCreator;
  }
}