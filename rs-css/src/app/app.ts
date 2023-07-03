import '../styles/style.css'
import CssDisplayView from './view/css-display/css-display-view';
import EventDisplayView from './view/event-display/event-display-view';
import FooterView from './view/footer/footer-view';
import HeaderView from './view/header/header-view';
import HtmlDisplayView from './view/html-display/html-display-html';
import MainView from './view/main/main-view';
import NavDisplayView from './view/nav-display/nav-display-view';

export default class App {
  constructor() {
  this.createView();
  }

  createView(): void {
    const main = new MainView();
    const header = new HeaderView();
    const footer = new FooterView();
    const eventDisplay = new EventDisplayView();
    const cssDisplay = new CssDisplayView();
    const htmlDisplay = new HtmlDisplayView();
    const navDispay = new NavDisplayView();
    const leftSideContainer = document.createElement('div');
    leftSideContainer.classList.add('left-side');
    const rightSideContainer = document.createElement('div');
    rightSideContainer.classList.add('right-side');
    document.body.appendChild(main.getHtmlElement());
    leftSideContainer.append(header.getHtmlElement(), eventDisplay.getHtmlElement(), cssDisplay.getHtmlElement(), htmlDisplay.getHtmlElement(), footer.getHtmlElement());
    document.querySelector('.main')?.appendChild(leftSideContainer);
    rightSideContainer.append(navDispay.getHtmlElement());
    document.querySelector('.main')?.appendChild(rightSideContainer);
  }
}