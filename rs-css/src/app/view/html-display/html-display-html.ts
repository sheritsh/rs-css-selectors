import './html-display.css'
import { IElement } from "../../util/types";
import View from '../view';
import htmlDisplayHTML from './html-display-view';

const CssClasses = {
  HTML_DISPLAY: 'html-display',
};

export default class HtmlDisplayView extends View {
  constructor() {
    const params: IElement = {
      tag: 'div',
      classNames: [CssClasses.HTML_DISPLAY],
      innerHtml: htmlDisplayHTML
    };
    super(params);
  }

}