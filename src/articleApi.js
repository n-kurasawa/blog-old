import firebase from '@firebase/app';
import '@firebase/database';
import config from './config';

export default class ArticleApi {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database();
  }

  all() {
    return this.db
      .ref('articles')
      .once('value')
      .then(articles => {
        return articles.val();
      });
  }
}
