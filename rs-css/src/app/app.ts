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
  this.getCurrentLvl();
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
    const winnerWindow = document.createElement('div');
    winnerWindow.classList.add('winner-window', 'none');
    winnerWindow.textContent = 'Поздравляю! Ты победил!';
    document.body.appendChild(winnerWindow);
    this.receiveEnteredSelector();
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
    const inputArea = document.createElement('div');
    inputArea.classList.add('input-area');
    const formCss = document.createElement('form');
    formCss.id = 'selector-form';
    const inputCss = document.createElement('input');
    inputCss.innerHTML = '<pre><code>'
    inputCss.setAttribute('type', 'text');
    inputCss.setAttribute('placeholder', 'Type in a CSS selector');
    inputCss.setAttribute('maxlength', '20');
    inputCss.classList.add('input-css');
    inputCss.id = 'selector-input'
    const sendBtn = document.createElement('button');
    sendBtn.textContent = 'Enter';
    sendBtn.setAttribute('type', 'submit');
    const description = document.createElement('div');
    description.innerHTML = `<br>{<br> /* Styles would go here.<br>*/<br>}`;
    description.classList.add('description');
    const helpBtn = document.createElement('button');
    helpBtn.textContent = 'Help';
    helpBtn.addEventListener('click', () => {
      this.setLvlHelpedStatus();
      inputCss.classList.add('typewritten');
      let index = 0;
      const typingInterval = setInterval(() => {
        inputCss.value += levelsData[this.currentLevel - 1].selector.charAt(index);
        index++;
        if (index >= levelsData[this.currentLevel - 1].selector.length) {
          clearInterval(typingInterval);
        }
      }, 200);
      inputCss.classList.remove('typewritten');
    });
    formCss.append(inputCss, sendBtn);
    inputArea.append(formCss, helpBtn);
    editorArea.append(lineNumbers, inputArea, description);
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
    inputHtml.textContent += `<div style="castle">`;
    inputHtml.textContent += levelsData[this.currentLevel - 1].htmlMarkup;
    inputHtml.textContent += `\n</div>`;
    inputHtml.style.whiteSpace = 'pre-line';
    inputHtml.classList.add('input-html');
    editorArea.append(lineNumbers, inputHtml);
    editorPanel.append(inputHeader, editorArea);
    this.htmlDisplayChildren.push(editorPanel);
  }

  composeEventDisplay() {
    const eventScreen = document.createElement('div');
    eventScreen.classList.add('obj-screen');
    eventScreen.innerHTML = levelsData[this.currentLevel - 1].htmlMarkup;
    this.eventDisplayChildren.push(eventScreen);
  }

  composeNavDisplay(){
    const navHeader = document.createElement('div');
    navHeader.classList.add('nav__header');
    const curLvl = document.createElement('div');
    curLvl.classList.add('nav__header_cur-lvl');
    curLvl.textContent = `Level ${this.currentLevel} of ${levelsData.length}`;
    const curLvlStatus = document.createElement('div');
    curLvlStatus.classList.add('level-status');
    const savedStatus = localStorage.getItem(`lvl${this.currentLevel}`);
    if (savedStatus === 'complete') {
      curLvlStatus.classList.add('status-green');
    } else if (savedStatus === 'helped') {
      curLvlStatus.classList.add('status-orange');
    } else {
      curLvlStatus.classList.add('status-red');
    }
    const prevLvl = document.createElement('div');
    prevLvl.classList.add('nav__header_prev');
    prevLvl.addEventListener('click', () => {
      this.prevLvl();
    });
    const nxtLvl = document.createElement('div');
    nxtLvl.addEventListener('click', () => {
      this.nextLvl();
    });
    nxtLvl.classList.add('nav__header_next');
    const lvlMenu = document.createElement('div');
    lvlMenu.classList.add('nav__header-menu');
    lvlMenu.addEventListener('click', () => {
      levelSwitchMenu.classList.remove('translated');
    });
    navHeader.append(curLvl, curLvlStatus, prevLvl, nxtLvl, lvlMenu);

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

    const levelSwitchMenu = document.createElement('div');
    levelSwitchMenu.classList.add('nav__level-switch', 'translated');
    const levelMenuHeader = document.createElement('div');
    levelMenuHeader.classList.add('level-switch__header');
    const levelTitle = document.createElement('div');
    levelTitle.classList.add('level-switch__title');
    levelTitle.textContent = 'Choose a level';
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('level-switch__close-btn');
    closeBtn.addEventListener('click', () => {
      levelSwitchMenu.classList.add('translated');
    });
    const levelsBar =  document.createElement('div');
    levelsBar.classList.add('level-switch__levels');
    const savedStatuses: unknown[] = [];
    for(let i = 0; i < levelsData.length; i++) {
      savedStatuses.push(localStorage.getItem(`lvl${i}`));
    }
    levelsData.forEach((level, index) => {
      let lvlColor: string;
      const levelLine = document.createElement('div');
      levelLine.classList.add("nav__level-line");
      if (this.currentLevel === index+1) {
        levelLine.classList.add("current");
      }
      if (savedStatuses[index+1] === 'complete') {
        lvlColor = 'status-green';
      } else if (savedStatuses[index+1] === 'helped') {
        lvlColor = 'status-orange';
      } else {
        lvlColor = 'status-red';
      }
      levelLine.innerHTML += `<div class="level-status ${lvlColor}"></div>`;
      levelLine.innerHTML += `<div class ="level-numb">${level.level}</div>`;
      levelLine.innerHTML += `<div>${level.syntax}</div>`;
      levelLine.addEventListener('click', () => {
        this.currentLevel = level.level;
        this.refresh();
      });
      levelsBar.append(levelLine);
    });
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-btn');
    resetBtn.textContent = 'Reset Progress';
    resetBtn.addEventListener('click', () => {
      localStorage.clear();
      this.currentLevel = 1;
      this.refresh();
    });
    levelMenuHeader.append(levelTitle, closeBtn);
    levelSwitchMenu.append(levelMenuHeader, levelsBar, resetBtn);
    this.navDisplayChildren.push(navHeader ,title, toDo, syntax, help, examplesTitle, examples, levelSwitchMenu);
  }

  nextLvl(): void {
    if (this.currentLevel < 10) {
      this.currentLevel++;
      this.refresh();
    }
  }

  prevLvl() {
    if (this.currentLevel > 1) {
      this.currentLevel--;
      this.refresh();
    }
  }

  refresh() {
    document.body.innerHTML = '';
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

  getCurrentLvl() {
    const lvlFromStorage = Number(localStorage.getItem('currentLvl'));
    if (lvlFromStorage > 0) {
      this.currentLevel = lvlFromStorage;
    }
  }

  setLvlCompleteStatus() {
    if (localStorage.getItem(`lvl${this.currentLevel}`) !== 'helped') {
      localStorage.setItem(`lvl${this.currentLevel}`, 'complete');
    }
  }

  setLvlHelpedStatus() {
    if (localStorage.getItem(`lvl${this.currentLevel}`) !== 'complete') {
      localStorage.setItem(`lvl${this.currentLevel}`, 'helped');
    }
  }

  receiveEnteredSelector() {
    document.getElementById('selector-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputSelector = document.getElementById('selector-input') as HTMLInputElement;
      const correctObjects = document.querySelectorAll(`.obj-screen ${levelsData[this.currentLevel - 1].selector}`);
      if (inputSelector.value === levelsData[this.currentLevel - 1].selector) {
        this.setLvlCompleteStatus();
        correctObjects.forEach((obj) => {
          obj?.classList.add('gelatine');
        });
        setTimeout(() => {
          correctObjects.forEach((obj) => {
            obj?.classList.remove('gelatine');
          });
          if (this.currentLevel === 10) {
            document.querySelector('.winner-window')?.classList.remove('none');
          } else {
            this.nextLvl();
            this.refresh();
          }
        }, 1000);
      } else {
        const selectedObjects = document.querySelectorAll(`.obj-screen ${inputSelector.value}`);
        if (selectedObjects.length > 0) {
          selectedObjects.forEach((obj) => {
            obj?.classList.add('shake');
          });
          setTimeout(() => {
            selectedObjects.forEach((obj) => {
              obj?.classList.remove('shake');
            });
          }, 500);
        } else {
          const gamingArea = document.querySelector('.gaming-area');
          gamingArea?.classList.add('shake');
          setTimeout(() => {
            gamingArea?.classList.remove("shake");
          }, 500);
        }
      }
    });
  }
}