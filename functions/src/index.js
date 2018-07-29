import * as functions from 'firebase-functions';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

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

const resolvers = {
  Query: {
    articles: () => [
      {
        id: 1,
        title: 'タイトル',
        contents: 'コンテンツです',
        tags: 'タグ ほげ test',
        date: '2018-03-11',
      },
      {
        id: 2,
        title: 'タイトル2',
        contents: '2コンテンツです',
        tags: 'タグ',
        date: '2018-03-12',
      },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

export const api = functions.https.onRequest(app);
