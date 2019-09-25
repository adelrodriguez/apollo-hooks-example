import React from 'react';
import { mount } from 'enzyme';
import { IconButton, Button } from '@material-ui/core';
import { updateWrapper } from '../../utils/testing';
import { withMockedProvider, mockQueries } from '../../utils/graphql';
import { REMOVE_USER } from '../../graphql/mutations';
import UsersListItem from './';
import Alert from '../Alert';

const mockUser = {
  id: '0',
  name: 'Lorem Ipsum',
};

describe('UsersListItem', () => {
  let mocks;

  beforeAll(async () => {
    mocks = await mockQueries({ REMOVE_USER }, [{ id: '0' }]);

    mocks[0].result = jest.fn(() => ({ data: { removeUser: false } }));
  });

  describe('mutations', () => {
    test('removes a user successfully', async () => {
      const wrapper = mount(withMockedProvider(<UsersListItem user={mockUser} />, mocks));

      wrapper.find(IconButton).simulate('click');

      wrapper
        .find(Alert)
        .find(Button)
        .at(1)
        .simulate('click');

      const removeUserMock = mocks[0].result;

      await updateWrapper(wrapper);

      expect(removeUserMock).toHaveBeenCalled();
    });
  });
});
