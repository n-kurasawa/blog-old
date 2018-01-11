import * as firebase from 'firebase';
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
