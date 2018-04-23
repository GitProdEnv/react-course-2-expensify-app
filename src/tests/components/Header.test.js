import React from 'react';
import { shallow } from 'enzyme'; // to actually test React components
//import toJSON from 'enzyme-to-json';
// Remove all the junk in js.snap and only give back the html
// this is done in jest.config.json instead now
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

