import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

admin.initializeApp();

const typeDefs = gql`
  type Query {
    articles: [Article!]!
  }

  type Article {
    id: ID! @unique
    title: String!
    contents: String!
    tags: String!
    date: String!
  }
`;

async function articles() {
  const snapshot = await admin
    .database()
    .ref('all')
    .once('value');
  return snapshot.val();
}

const resolvers = {
  Query: {
    articles,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

export const api = functions.https.onRequest(app);
