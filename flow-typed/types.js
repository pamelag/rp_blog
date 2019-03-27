// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  poster: string,
  trailer: string,
  rating?: string
};

export type Post = {
  id: string,
  title: string,
  summary: string,
  author: string,
  storyTime: string
};


export type State = {
  apiData: {
    posts: Array<Post>
  }
};

declare type ActionType = 'GET_POSTS';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<'GET_POSTS', Array<Post>>;



