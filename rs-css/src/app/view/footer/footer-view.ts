import './footer.css'
import { IElement } from "../../util/types";
import View from '../view';
import footerHTML from './footer-html';

const CssClasses = {
  FOOTER: 'footer',
};

export default class FooterView extends View {
  constructor() {
    const params: IElement = {
      tag: 'footer',
      classNames: [CssClasses.FOOTER],
      innerHtml: footerHTML
    };
    super(params);
  }

}