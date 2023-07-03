import ILevelData from "./types";

const levelsData: ILevelData[] = [
  {
    level: 1,
    title: 'Type Selector',
    toDo: 'Select elements by their type',
    selector: 'knight',
    syntax: 'A',
    help:
    'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    htmlMarkup: `
    <knight></knight>
    <princess></princess>
    <knight></knight>
    `
  },
];

export default levelsData;