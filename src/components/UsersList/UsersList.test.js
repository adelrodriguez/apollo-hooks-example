import React from 'react';
import { shallow, mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { List } from '@material-ui/core';
import { withMockedProvider, mockQueries } from '../../utils/graphql';
import { updateWrapper } from '../../utils/testing';
import { FETCH_USERS } from '../../graphql/queries'
import UnconnectedUsersList from './UsersList';
import UsersList from '.';
import UsersListItem from '../UsersListItem';

describe('UsersList', () => {
  let mocks;

  beforeAll(async () => {
    mocks = await mockQueries({ FETCH_USERS });
  });

  describe('rendering', () => {
    test('renders unconnected', () => {
      const wrapper = shallow(<UnconnectedUsersList />);

      expect(wrapper).toMatchSnapshot();
    });

    test('renders connected', () => {
      const wrapper = shallow(
        <MockedProvider mocks={[]} addTypename={false}>
          <UsersList />
        </MockedProvider>
      );

      expect(wrapper).toMatchSnapshot();
    })

    test('renders connected', () => {
      const wrapper = shallow(withMockedProvider(<UsersList />));

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('content', () => {
    test('contains 1 List', () => {
      const wrapper = shallow(<UnconnectedUsersList />);

      expect(wrapper.find(List)).toHaveLength(1);
    });

    test('contains at least 1 UsersListItem', async () => {
      const wrapper = mount(withMockedProvider(<UsersList />, mocks));

      await updateWrapper(wrapper);

      expect(wrapper.find(UsersListItem).length).toBeGreaterThanOrEqual(1);
    });
  });
});