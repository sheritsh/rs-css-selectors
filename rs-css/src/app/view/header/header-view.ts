import './header.css'
import { IElement } from "../../util/types";
import View from '../view';
import headerHTML from './header-html';

const CssClasses = {
  HEADER: 'header',
};

export default class HeaderView extends View {
  constructor() {
    const params: IElement = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      innerHtml: headerHTML
    };
    super(params);
  }

}