import React from 'react';
import { MockedProvider } from '@apollo/react-testing';

export default function withMockedProvider(Component, mocks = []) {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {Component}
    </MockedProvider>
  );
}
