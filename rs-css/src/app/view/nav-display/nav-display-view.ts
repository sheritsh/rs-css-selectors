import './nav-display.css'
import { IElement } from "../../util/types";
import View from '../view';
import navDisplayHTML from './nav-display-html';

const CssClasses = {
  NAV_DISPLAY: 'nav-display',
};

export default class NavDisplayView extends View {
  constructor() {
    const params: IElement = {
      tag: 'div',
      classNames: [CssClasses.NAV_DISPLAY],
      innerHtml: navDisplayHTML
    };
    super(params);
  }

}