import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { readFileSync } from 'fs';
import { join } from 'path';
import mocks from './mocks';

const typeDefs = readFileSync(join(__dirname, './schema.txt'), 'utf-8');

export const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

/**
 * Mock client with schema
 */
const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
});

export default client;
