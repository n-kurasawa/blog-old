import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/functions';
import config from './config';

export default class ArticleApi {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database();

    const helloFirebase = firebase.functions().httpsCallable('helloFirebase');
    helloFirebase({ text: 'test' }).then(result => {
      console.log(result);
    });
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
