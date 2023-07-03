import './event-display.css'
import { ILogicElements } from "../../util/types";
import Logic from '../logic';

const CssClasses = {
  EVENT_DISPLAY: 'event-display',
};

export default class EventDisplayView extends Logic {
  constructor() {
    const params: ILogicElements = {
      tag: 'div',
      classNames: [CssClasses.EVENT_DISPLAY],
      childrens: null
    };
    super(params);
  }

}