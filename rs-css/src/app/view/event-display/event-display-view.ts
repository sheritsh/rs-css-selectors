import './event-display.css'
import { IElement } from "../../util/types";
import View from '../view';
import eventDisplayHTML from './event-display-html';

const CssClasses = {
  EVENT_DISPLAY: 'event-display',
};

export default class EventDisplayView extends View {
  constructor() {
    const params: IElement = {
      tag: 'div',
      classNames: [CssClasses.EVENT_DISPLAY],
      innerHtml: eventDisplayHTML
    };
    super(params);
  }

}