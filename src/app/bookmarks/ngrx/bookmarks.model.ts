export default interface Bookmark {
  name: string;
  url: string;
  group: Group;
}

export enum Group {
  work = 'Work',
  leisure = 'Leisure',
  personal = 'Personal'
}