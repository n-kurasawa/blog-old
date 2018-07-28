import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((req, res) => {
  const world = `from ES6 in Cloud Functions!`;
  res.status(200).send(`Hello ${world}`);
});
