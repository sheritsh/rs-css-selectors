import './css-display.css'
import { ILogicElements } from '../../util/types';
import Logic from '../logic';

const CssClasses = {
  CSS_DISPLAY: 'css-display',
};

export default class CssDisplayView extends Logic {
  constructor() {
    const params: ILogicElements = {
      tag: 'div',
      classNames: [CssClasses.CSS_DISPLAY],
      childrens: null,
    };
    super(params);
  }

}