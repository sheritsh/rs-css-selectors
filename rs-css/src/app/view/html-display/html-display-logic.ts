import './html-display.css'
import { ILogicElements } from "../../util/types";
import Logic from '../logic';

const CssClasses = {
  HTML_DISPLAY: 'html-display',
};

export default class HtmlDisplayView extends Logic {
  constructor(htmlDisplayChildren: HTMLElement[]) {
    const params: ILogicElements = {
      tag: 'div',
      classNames: [CssClasses.HTML_DISPLAY],
      childrens: htmlDisplayChildren
    };
    super(params);
  }

}