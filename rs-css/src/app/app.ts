import '../styles/style.css'
import CssDisplayView from './view/css-display/css-display-logic';
import EventDisplayView from './view/event-display/event-display-logic';
import FooterView from './view/footer/footer-view';
import HeaderView from './view/header/header-view';
import HtmlDisplayView from './view/html-display/html-display-logic';
import MainView from './view/main/main-view';
import NavDisplayView from './view/nav-display/nav-display-logic';

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
    const gamingArea = document.createElement('div');
    gamingArea.classList.add('gaming-area');
    gamingArea.append(cssDisplay.getHtmlElement(), htmlDisplay.getHtmlElement());
    document.body.appendChild(main.getHtmlElement());
    leftSideContainer.append(header.getHtmlElement(), eventDisplay.getHtmlElement(), gamingArea, footer.getHtmlElement());
    document.querySelector('.main')?.appendChild(leftSideContainer);
    rightSideContainer.append(navDispay.getHtmlElement());
    document.querySelector('.main')?.appendChild(rightSideContainer);
  }
}