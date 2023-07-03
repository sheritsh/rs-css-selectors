import './nav-display.css'
import { ILogicElements } from "../../util/types";
import Logic from '../logic';

const CssClasses = {
  NAV_DISPLAY: 'nav-display',
};

export default class NavDisplayView extends Logic {
  constructor() {
    const params: ILogicElements = {
      tag: 'div',
      classNames: [CssClasses.NAV_DISPLAY],
      childrens: null
    };
    super(params);
  }

}