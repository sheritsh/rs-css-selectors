import ILevelData from "./types";

const levelsData: ILevelData[] = [
  {
    level: 1,
    title: 'Type Selector',
    toDo: 'Select the princess',
    selector: 'princess',
    syntax: 'A',
    help:
    'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    htmlMarkup: `
    <princess></princess>`
  },
  {
    level: 2,
    title: 'Type Selector',
    toDo: 'Select the all knights',
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
    <knight></knight>`
  },
  {
    level: 3,
    title: 'ID Selector',
    toDo: 'Select the aggressive knight',
    selector: '#aggressive',
    syntax: '#id',
    help:
    'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
    ],
    htmlMarkup: `
    <knight id="aggressive"></knight>
    <princess></princess>
    <knight></knight>`
  },
  {
    level: 4,
    title: 'Descendant Selector',
    toDo: 'Select the knight in the fog',
    selector: 'fog knight',
    syntax: 'A  B',
    help:
    'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
    examples: [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
    ],
    htmlMarkup: `
    <princess></princess>
    <fog>
      <knight></knight>
    </fog>
    <knight></knight>`
  },
  {
    level: 5,
    title: 'Combine the Descendant & ID Selectors',
    toDo: 'Select knight in flower garden',
    selector: '#flower knight',
    syntax: '#id  A',
    help:
    'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>',
    ],
    htmlMarkup: `
    <garden>
      <princess></princess>
    </garden>
    <garden id="flower">
      <knight></knight>
    </garden>
    <fortress>
      <knight></knight>
    </fortress>`
  },
  {
    level: 6,
    title: 'Class Selector',
    toDo: 'Select the hidden enemies',
    selector: '.hidden',
    syntax: '.small',
    help:
    'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
      '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>.',
    ],
    htmlMarkup: `
    <knight></knight>
    <princess></princess>
    <knight class="hidden"></knight>
    <assassin class="hidden"></assasin>`
  },
  {
    level: 7,
    title: '',
    toDo: 'Select the hidden knights',
    selector: 'knight.hidden',
    syntax: 'A.className',
    help:
    'You can combine the class selector with other selectors, like the type selector.',
    examples: [
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>',
    ],
    htmlMarkup: `
    <assassin></assassin>
    <assassin class="hidden"></assassin>
    <fortress>
      <knight class="hidden"></knight>
    </fortress>
    <garden>
      <assassin></assassin>
    </garden>
    <garden>
      <knight class="hidden"></knight>
    </garden>`
  },
  {
    level: 8,
    title: '',
    toDo: 'Select all hidden assassins in fog',
    selector: 'fog assassin.hidden',
    syntax: 'Put your back into it!',
    help:
    'Combine what you learned in the last few levels to solve this one!',
    examples: [],
    htmlMarkup: `
    <fog><assassin></assasin></fog>
    <assassin></assassin>
    <fog><assassin class="hidden"></assassin></fog>
    <garden><assassin class="hidden"></assassin></garden>`
  },
  {
    level: 9,
    title: 'Comma Combinator',
    toDo: 'Select all the enemies',
    selector: 'knight, assassin',
    syntax: 'A, B',
    help:
    'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
            '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
    ],
    htmlMarkup: `
    <knight></knight>
    <princess></princess>
    <assassin></assassin>`
  },
  {
    level: 10,
    title: 'The Universal Selector',
    toDo: 'Select all the things!',
    selector: '*',
    syntax: '*',
    help:
    'You can select all elements with the universal selector!',
    examples: ['<strong>p *</strong> selects any element inside all <tag>p</tag> elements.'],
    htmlMarkup: `
    <fog>
      <assassin class="hidden"></assassin>
    </fog>
    <dragon></dragon>
    <princess></princess>
    <garden>
    <knight id="aggressive"></knight>
    </garden>`
  }
];

export default levelsData;