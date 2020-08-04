import React from 'react';
import { shallow } from 'enzyme';
import { Drawer, Divider } from '@material-ui/core';
import SideBar from '../index';
import ListItems from '../../ListItems';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SideBar history={{}} />);
});

describe('SideBar Component', () => {
    it('has a ListItems, Drawer & Divider', () => {
        expect(wrapper.find(ListItems).length).toEqual(1);
        expect(wrapper.find(Drawer).length).toEqual(1);
        expect(wrapper.find(Divider).length).toEqual(1);
      });
});

