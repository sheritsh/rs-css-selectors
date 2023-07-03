import './css-display.css'
import { IElement } from "../../util/types";
import View from '../view';
import cssDisplayHTML from './css-display-html';

const CssClasses = {
  CSS_DISPLAY: 'css-display',
};

export default class CssDisplayView extends View {
  constructor() {
    const params: IElement = {
      tag: 'div',
      classNames: [CssClasses.CSS_DISPLAY],
      innerHtml: cssDisplayHTML
    };
    super(params);
  }

}