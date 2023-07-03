export interface ILayoutElements {
  tag: string;
  classNames: Array<string>;
  innerHtml: string;
}

export interface ILogicElements {
  tag: string;
  classNames: Array<string>;
  childrens: Array<HTMLElement> | null;
}