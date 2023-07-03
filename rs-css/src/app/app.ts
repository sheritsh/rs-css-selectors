import '../styles/reset.css'
import '../styles/style.css'
import levelsData from './data/levels';
import CssDisplayView from './view/css-display/css-display-logic';
import EventDisplayView from './view/event-display/event-display-logic';
import FooterView from './view/footer/footer-view';
import HeaderView from './view/header/header-view';
import HtmlDisplayView from './view/html-display/html-display-logic';
import MainView from './view/main/main-view';
import NavDisplayView from './view/nav-display/nav-display-logic';

export default class App {
  private eventDisplayChildren: HTMLElement[];
  private cssDisplayChildren: HTMLElement[];
  private htmlDisplayChildren: HTMLElement[];
  private navDisplayChildren: HTMLElement[];
  private currentLevel = 1;

  constructor() {
  this.eventDisplayChildren = [];
  this.cssDisplayChildren = [];
  this.htmlDisplayChildren = [];
  this.navDisplayChildren = [];
  this.composeEventDisplay();
  this.composeCssDisplay();
  this.composeHtmlDisplay();
  this.composeNavDisplay();
  this.createView(this.cssDisplayChildren, this.htmlDisplayChildren, this. navDisplayChildren, this.eventDisplayChildren);
  }

  createView(cssDisplayChildren: HTMLElement[], htmlDisplayChildren: HTMLElement[], navDisplayChildren: HTMLElement[], eventDisplayChildren: HTMLElement[]): void {
    const main = new MainView();
    const header = new HeaderView();
    const footer = new FooterView();
    const eventDisplay = new EventDisplayView(eventDisplayChildren);
    const cssDisplay = new CssDisplayView(cssDisplayChildren);
    const htmlDisplay = new HtmlDisplayView(htmlDisplayChildren);
    const navDispay = new NavDisplayView(navDisplayChildren);
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

  composeCssDisplay(): void {
    const editorPanel = document.createElement('div');
    editorPanel.classList.add('editor-panel');
    const inputHeader = document.createElement('div');
    inputHeader.classList.add('input-header');
    const elementName = document.createElement('div');
    elementName.textContent = 'CSS Editor';
    const fileName = document.createElement('div');
    fileName.classList.add('filename');
    fileName.textContent = 'style.css';
    const editorArea = document.createElement('div');
    inputHeader.append(elementName, fileName);
    editorArea.classList.add('editor-area');
    const lineNumbers = document.createElement('div');
    lineNumbers.classList.add('line-numbers');
    for (let i = 0; i < 30; i++) {
      lineNumbers.innerHTML += `${i+1}<br>`;
    }
    const inputCss = document.createElement('input');
    inputCss.setAttribute('type', 'text');
    inputCss.setAttribute('placeholder', 'Type in a CSS selector');
    inputCss.classList.add('input-css');
    const description = document.createElement('div');
    description.innerHTML = `<br>{<br> /* Styles would go here.<br>*/<br>}`;
    description.classList.add('description');
    editorArea.append(lineNumbers, inputCss, description);
    editorPanel.append(inputHeader, editorArea);
    this.cssDisplayChildren.push(editorPanel);
  }

  composeHtmlDisplay():void {
    const editorPanel = document.createElement('div');
    editorPanel.classList.add('editor-panel');
    const inputHeader = document.createElement('div');
    inputHeader.classList.add('input-header');
    const elementName = document.createElement('div');
    elementName.textContent = 'HTML Viewer';
    const fileName = document.createElement('div');
    fileName.textContent = 'castle.html';
    fileName.classList.add('filename');
    const editorArea = document.createElement('div');
    editorArea.classList.add('editor-area');
    inputHeader.append(elementName, fileName);
    const lineNumbers = document.createElement('div');
    lineNumbers.classList.add('line-numbers');
    for (let i = 0; i < 30; i++) {
      lineNumbers.innerHTML += `${i+1}<br>`;
    }
    const inputHtml = document.createElement('div');
    inputHtml.textContent = `<div style="castle"> \r\n</div>`;
    inputHtml.style.whiteSpace = 'pre';
    inputHtml.classList.add('input-html');
    editorArea.append(lineNumbers, inputHtml);
    editorPanel.append(inputHeader, editorArea);
    this.htmlDisplayChildren.push(editorPanel);
  }

  composeEventDisplay() {
    const princess = document.createElement('div');
    princess.classList.add('princess');
    this.eventDisplayChildren.push(princess);
  }

  composeNavDisplay(){
    const title = document.createElement('div');
    title.classList.add('nav__title');
    title.textContent = levelsData[this.currentLevel - 1].title;
    this.eventDisplayChildren.push(title);
    const toDo = document.createElement('div');
    toDo.classList.add('nav__toDo');
    toDo.textContent = levelsData[this.currentLevel - 1].toDo;
    const syntax = document.createElement('div');
    syntax.classList.add('nav__syntax');
    syntax.textContent = levelsData[this.currentLevel - 1].syntax;
    const help = document.createElement('div');
    help.classList.add('nav__help');
    help.textContent = levelsData[this.currentLevel - 1].help;
    const examplesTitle = document.createElement('div');
    examplesTitle.classList.add('nav__examples-title');
    examplesTitle.textContent = 'Examples';
    const examples = document.createElement('div');
    examples.classList.add('nav__examples');
    levelsData[this.currentLevel - 1].examples.forEach((line ) => {
      examples.innerHTML += line;
      if (line !== levelsData[this.currentLevel - 1].examples[levelsData[this.currentLevel - 1].examples.length - 1]) {
        examples.innerHTML += '<hr>';
      }
    });

    this.navDisplayChildren.push(title, toDo, syntax, help, examplesTitle, examples);
  }

}