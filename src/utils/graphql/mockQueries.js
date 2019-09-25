import { graphql } from 'graphql';
import { schema } from './mockClient';

/**
 * Takes a query and returns mocked data
 * @param { Function } query - A query to run through the schema
 * @param { Object } variableValues - An object with the query variables
 * @returns A mocked response
 */
export const mockResponse = async (query, variableValues = {}) => {
  try {
    const res = await graphql({
      schema,
      source: query.loc.source.body,
      variableValues,
    });

    return res;
  } catch (error) {
    return error;
  }
};

/**
 * Takes an array of requests and returns mocked data
 * @param { Array } requests - An array of requests objects, with a query and variable property
 */
export const mockQueries = (queries = {}, values = []) => {
  const requests = Object.keys(queries).map((query, i) => (
    { query: queries[query], variables: values[i] }
  ));

  const mocks = requests.map(async (request) => {
    const { query, variables } = request;
    const { data } = await mockResponse(query, variables);

    return { request, result: { data } };
  });

  return Promise.all(mocks);
};
