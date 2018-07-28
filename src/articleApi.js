import firebase from '@firebase/app';
import '@firebase/database';
import config from './config';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

export default class ArticleApi {
  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database();

    // const helloFirebase = firebase.functions().httpsCallable('helloFirebase');
    // helloFirebase({ text: 'test' }).then(result => {
    //   console.log(result);
    // });
    const client = new ApolloClient({
      uri: '/api/graphql',
    });

    client
      .query({
        query: gql`
          query hello {
            hello
          }
        `,
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
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
