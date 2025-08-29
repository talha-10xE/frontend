
export enum VoteChoice {
  Cat = 'cat',
  Dog = 'dog',
}

export interface Votes {
  [VoteChoice.Cat]: number;
  [VoteChoice.Dog]: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  images: {
    src: string;
    alt: string;
  }[];
}
