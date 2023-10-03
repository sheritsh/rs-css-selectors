import './header.css'
import { ILayoutElements } from "../../util/types";
import headerHTML from './header-html';
import Layout from '../layout';

const CssClasses = {
  HEADER: 'header',
};

export default class HeaderView extends Layout {
  constructor() {
    const params: ILayoutElements = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      innerHtml: headerHTML
    };
    super(params);
  }

}