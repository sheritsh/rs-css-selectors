import './footer.css'
import { ILayoutElements } from "../../util/types";
import footerHTML from './footer-html';
import Layout from '../layout';

const CssClasses = {
  FOOTER: 'footer',
};

export default class FooterView extends Layout {
  constructor() {
    const params: ILayoutElements = {
      tag: 'footer',
      classNames: [CssClasses.FOOTER],
      innerHtml: footerHTML
    };
    super(params);
  }

}