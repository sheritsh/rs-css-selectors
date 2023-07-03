export interface IElement {
  tag: string;
  classNames: Array<string>;
  innerHtml: string;
  callback?: unknown;
}